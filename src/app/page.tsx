import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex-1 w-full overflow-hidden bg-zinc-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-gary-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="flex flex-col items-center justify-center relative z-20 max-w-4xl mx-auto mt-24">
        <h1 className={cn("text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 text-center")}>
          Gate Syllabus Tracker
        </h1>
        <p className="text-center text-base sm:text-lg md:text-xl text-neutral-300 mb-6 sm:mb-8 px-4">
          Track your syllabus and prepare for your gate exam with ease
        </p>
        <Link href="/stream">
          <button className="px-4 sm:px-6 py-2 sm:py-3 bg-slate-800 text-white text-base sm:text-lg font-semibold rounded-lg border border-slate-700 hover:bg-slate-700 transition-colors duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  )
}
