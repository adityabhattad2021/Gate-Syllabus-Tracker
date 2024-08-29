import { cn } from "@/lib/utils";
import { BackgroundBeams } from "./ui/background-beans";

interface HeaderCardProps {
    children: React.ReactNode;
    className?: string;
}

export default function HeaderCard({ children, className }: HeaderCardProps) {
    return (
        <div className={cn("relative isolate overflow-hidden mt-12 border border-border px-4 md:px-8 py-12 text-center rounded-3xl", className)}>
            <BackgroundBeams className="z-0 w-full" svgViewBox="0 0 696 316" />
            {children}
        </div>
    )
}