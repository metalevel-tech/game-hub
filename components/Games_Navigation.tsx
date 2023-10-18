import React from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/cn-utils";

import { Button } from "./ui/button";

export interface Games_Navigation_Props {
	className?: string;
	nextLink: string | null | undefined;
	nextCb: () => void;
	nextName: string;
	prevLink: string | null | undefined;
	prevCb: () => void;
	prevName: string;
	upCb: () => void;
}

const Games_Navigation: React.FC<Games_Navigation_Props> = ({
	className,
	nextLink,
	nextCb,
	prevLink,
	prevName,
	prevCb,
	nextName,
}) => {
	return (
		<div
			className={cn(
				"flex items-center",
				"gap-4 xs:gap-2 sm:gap-4",
				"justify-between xs:justify-end",
				"w-full xs:w-fit",
				className
			)}
		>
			<Button
				className="btn_next_prev pl-2 pr-4"
				disabled={!prevLink}
				name={prevName}
				onClick={() => prevLink && prevCb()}
			>
				<ChevronLeft />
				<span>{prevName}</span>
			</Button>

			<Button
				className="btn_next_prev pl-4 pr-2"
				disabled={!nextLink}
				name={nextName}
				onClick={() => nextLink && nextCb()}
			>
				<span>{nextName}</span>
				<ChevronRight />
			</Button>
		</div>
	);
};

export default Games_Navigation;
