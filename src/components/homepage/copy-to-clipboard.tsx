import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type Props = {
	text: string;
};

export default function CopyToClipboard({ text }: Props) {
	const [isCopied, setIsCopied] = useState(false);

	const copyToClipboard = async () => {
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 2000);

		await navigator.clipboard.writeText(text);
		toast.success("Copied to clipboard", {
			icon: <CopyIcon className="size-4" />,
		});
	};
	return (
		<button
			className="flex cursor-pointer items-center gap-2 py-3 font-light text-base text-primary outline-hidden transition-all duration-300 hover:text-muted-foreground dark:text-white/75 dark:hover:text-white/90"
			disabled={isCopied}
			onClick={() => copyToClipboard()}
			type="button"
		>
			{isCopied ? (
				<CheckIcon className={cn(isCopied ? "opacity-100" : "opacity-0", "")} />
			) : (
				<CopyIcon className="size-5" />
			)}
			{text}
		</button>
	);
}
