import { useLocation } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const navItems: NavItem[] = [
	{ href: "/", label: "home" },
	{ href: "/about", label: "about" },
	{ href: "/writing", label: "writing" },
];

interface NavItem {
	href: string;
	label: string;
}

export default function Navigation() {
	const pathname = useLocation().pathname;

	function isActive(href: string): boolean {
		if (href === "/") {
			return pathname === "/";
		}
		return pathname.startsWith(href);
	}
	return (
		<>
			<nav className="sticky top-24 hidden w-64 lg:block">
				<ul className="space-y-1.5 text-sm lowercase">
					{navItems.map((item) => (
						<li>
							<a
								className={cn(
									"block py-0.5 font-serif italic transition-colors duration-200",
									isActive(item.href)
										? "font-semibold text-flexoki-tx"
										: "text-flexoki-tx-2 hover:text-flexoki-tx"
								)}
								href={item.href}
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
			</nav>

			<nav className="mb-8 block border-flexoki-ui/20 border-b pb-2 lg:hidden">
				<ul className="flex justify-end gap-2 text-[13px] lowercase">
					{navItems.map((item) => (
						<li>
							<a
								className={cn(
									"block px-2 py-1 font-serif transition-colors duration-200",
									isActive(item.href)
										? "font-semibold text-flexoki-tx"
										: "text-flexoki-tx-2 hover:text-flexoki-tx"
								)}
								href={item.href}
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
}
