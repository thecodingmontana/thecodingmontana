import {
	useAnimationFrame,
	useMotionValue,
	useMotionValueEvent,
	useReducedMotion,
	useSpring,
	useTransform,
	useVelocity,
} from "motion/react";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { wrap } from "./palette";

export type RibbonMetrics = {
	vw: number;
	cardW: number;
	step: number;
	total: number;
	inset: number;
};

type DragState = {
	id: number;
	lastT: number;
	lastX: number;
	moved: boolean;
	start: number;
	v: number;
	x: number;
};

const MOBILE_BREAKPOINT = 768;
const DRIFT_PX_PER_MS = 0.018;
const IDLE_BEFORE_DRIFT_MS = 2500;
const DRAG_THRESHOLD_PX = 6;
const DRAG_GAIN = 1.15;
const MOMENTUM_MS = 260;

// vertical room the hero, captions, timeline and colophon need on desktop
const DESKTOP_CHROME_PX = 540;

/** Card height as a fraction of its width; matches the landscape screenshots. */
export const CARD_ASPECT = 10 / 16;

const measure = (vw: number, vh: number, count: number): RibbonMetrics => {
	const mobile = vw < MOBILE_BREAKPOINT;
	// on desktop the whole page fits one screen, so short windows shrink cards
	const fitsHeight = (vh - DESKTOP_CHROME_PX) / CARD_ASPECT;
	const cardW = Math.round(
		mobile
			? vw * 0.84
			: Math.min(560, Math.max(300, Math.min(vw * 0.34, fitsHeight)))
	);
	const step = Math.round(cardW * (mobile ? 1.06 : 1.08));
	return {
		cardW,
		inset: mobile ? 20 : Math.round(vw * 0.04),
		step,
		total: step * count,
		vw,
	};
};

/** Distance from the left inset at which a card sits centred in the viewport. */
const centreShift = (m: RibbonMetrics) => m.vw / 2 - m.cardW / 2 - m.inset;

export function useRibbon(count: number) {
	const reduce = useReducedMotion();
	const [metrics, setMetrics] = useState(() => measure(1280, 800, count));
	const metricsRef = useRef(metrics);
	metricsRef.current = metrics;

	// target is where input wants the ribbon; smooth is what renders
	const target = useMotionValue(0);
	const smooth = useSpring(target, { bounce: 0, visualDuration: 0.6 });
	const velocity = useVelocity(smooth);
	const rawTilt = useTransform(velocity, [-2500, 0, 2500], [-7, 0, 7], {
		clamp: true,
	});
	const tilt = useSpring(rawTilt, { bounce: 0, visualDuration: 0.4 });

	// 0..1 position along the timeline, a tick's centre at (i + 0.5) / count
	const progress = useTransform(smooth, (offset) => {
		const m = metricsRef.current;
		return wrap((offset + centreShift(m)) / m.step + 0.5, 0, count) / count;
	});

	const [active, setActive] = useState(0);
	const activeRef = useRef(0);
	const holds = useRef(new Set<string>());
	const lastInput = useRef(0);

	const indexAt = useCallback(
		(offset: number) => {
			const m = metricsRef.current;
			return wrap(Math.round((offset + centreShift(m)) / m.step), 0, count);
		},
		[count]
	);

	const goTo = useCallback(
		(index: number) => {
			const m = metricsRef.current;
			const base = wrap(index, 0, count) * m.step - centreShift(m);
			const laps = Math.round((target.get() - base) / m.total);
			target.set(base + laps * m.total);
			lastInput.current = performance.now();
		},
		[count, target]
	);

	const hold = useCallback((reason: string, on: boolean) => {
		if (on) {
			holds.current.add(reason);
		} else {
			holds.current.delete(reason);
		}
		lastInput.current = performance.now();
	}, []);

	useMotionValueEvent(smooth, "change", (offset) => {
		const index = indexAt(offset);
		if (index !== activeRef.current) {
			activeRef.current = index;
			setActive(index);
		}
	});

	useEffect(() => {
		const onResize = () => {
			metricsRef.current = measure(
				window.innerWidth,
				window.innerHeight,
				count
			);
			setMetrics(metricsRef.current);
			goTo(activeRef.current);
			smooth.jump(target.get());
		};
		onResize();
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, [count, goTo, smooth, target]);

	useEffect(() => {
		const onWheel = (event: WheelEvent) => {
			if (holds.current.has("detail")) {
				return;
			}
			const delta =
				Math.abs(event.deltaX) > Math.abs(event.deltaY)
					? event.deltaX
					: event.deltaY;
			target.set(target.get() + delta);
			lastInput.current = performance.now();
		};
		window.addEventListener("wheel", onWheel, { passive: true });
		return () => window.removeEventListener("wheel", onWheel);
	}, [target]);

	useAnimationFrame((_, delta) => {
		const idle = performance.now() - lastInput.current > IDLE_BEFORE_DRIFT_MS;
		if (reduce || holds.current.size > 0 || !idle) {
			return;
		}
		target.set(target.get() + Math.min(delta, 50) * DRIFT_PX_PER_MS);
	});

	const drag = useRef<DragState>({
		id: -1,
		lastT: 0,
		lastX: 0,
		moved: false,
		start: 0,
		v: 0,
		x: 0,
	});

	const pointer = {
		onClickCapture: (event: React.MouseEvent) => {
			if (drag.current.moved) {
				event.preventDefault();
				event.stopPropagation();
				drag.current.moved = false;
			}
		},
		onPointerCancel: () => {
			drag.current.id = -1;
			hold("drag", false);
		},
		onPointerDown: (event: React.PointerEvent) => {
			if (event.button !== 0) {
				return;
			}
			drag.current = {
				id: event.pointerId,
				lastT: event.timeStamp,
				lastX: event.clientX,
				moved: false,
				start: target.get(),
				v: 0,
				x: event.clientX,
			};
			hold("drag", true);
		},
		onPointerMove: (event: React.PointerEvent<HTMLElement>) => {
			const d = drag.current;
			if (event.pointerId !== d.id) {
				return;
			}
			const dx = event.clientX - d.x;
			if (!d.moved && Math.abs(dx) > DRAG_THRESHOLD_PX) {
				d.moved = true;
				event.currentTarget.setPointerCapture(event.pointerId);
			}
			if (!d.moved) {
				return;
			}
			const dt = Math.max(event.timeStamp - d.lastT, 1);
			d.v = (event.clientX - d.lastX) / dt;
			d.lastX = event.clientX;
			d.lastT = event.timeStamp;
			target.set(d.start - dx * DRAG_GAIN);
		},
		onPointerUp: () => {
			const d = drag.current;
			if (d.moved) {
				target.set(target.get() - d.v * DRAG_GAIN * MOMENTUM_MS);
			}
			d.id = -1;
			hold("drag", false);
		},
	};

	return { active, goTo, hold, metrics, pointer, progress, smooth, tilt };
}
