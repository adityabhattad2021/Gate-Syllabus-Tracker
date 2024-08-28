import { cn } from "@/lib/utils";
import { BackgroundBeams } from "./ui/background-beans";

interface HeaderCardProps {
    title: string;
    description: string;
    className?: string;
}

export default function HeaderCard({ title, description, className }: HeaderCardProps) {
    return (
        <div className={cn("relative isolate overflow-hidden mt-12 border border-border px-4 md:px-8 py-12 text-center rounded-3xl", className)}>
            <BackgroundBeams className="z-0 w-full" />
            <h1 className="text-4xl md:text-6xl z-10 relative font-bold text-left text-background">{title}</h1>
            <p className="text-l md:text-xl z-10 relative text-left mt-2 text-muted-foreground">
                {description}
            </p>
            <svg
                viewBox="0 0 1024 1024"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                aria-hidden="true"
            >
                <circle
                    cx="512"
                    cy="512"
                    r="512"
                    fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                    fillOpacity="0.1"
                ></circle>
                <defs>
                    <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                        <stop stopColor="var(--primary)"></stop>
                        <stop offset="1" stopColor="var(--secondary)"></stop>
                    </radialGradient>
                </defs>
            </svg>
        </div>
    )
}