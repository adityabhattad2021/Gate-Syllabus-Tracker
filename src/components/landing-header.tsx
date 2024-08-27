"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export function LandingHeader() {
    return (
        <div className="min-h-[30rem] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg p-4 sm:p-6 md:p-8">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <Boxes />
            <div className="flex flex-col items-center relative z-20 max-w-4xl mx-auto">
                <h1 className={cn("text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 text-center")}>
                    Gate Syllabus Tracker
                </h1>
                <p className="text-center text-base sm:text-lg md:text-xl text-neutral-300 mb-6 sm:mb-8 px-4">
                    Track your syllabus and prepare for your gate exam with ease
                </p>
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-slate-800 text-white text-base sm:text-lg font-semibold rounded-lg border border-slate-700 hover:bg-slate-700 transition-colors duration-300">
                    Get Started
                </button>
            </div>
        </div>
    );
}