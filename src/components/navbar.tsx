"use client";
import React, { useState } from "react";
import { HoveredLink, MenuItem } from "@/components/ui/navbar-menu";
import data from "@/data/available.json"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";



interface NavbarProps {
    className?: string;
}

export default function Navbar({ className }: NavbarProps) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-4 inset-x-0 mx-auto w-[88%] z-50", className)}
        >
            <nav
                onMouseLeave={() => setActive(null)}
                className="relative rounded-full border border-slate-700 bg-gradient-to-r from-zinc-900 to-gray-900 shadow-input flex items-center justify-between px-4 md:px-8 py-4 md:py-6"
            >
                <Link href="/">
                    <h1 className="text-white text-xl md:text-2xl font-bold">
                        SyllabiGenius
                    </h1>
                </Link>
                <div className="hidden md:flex items-center space-x-4 gap-4">
                    <MenuItem setActive={setActive} active={active} item="Branches" >
                        <div className="flex flex-col space-y-4 text-sm bg-gray-800">
                            {data.branches.map((branch) => (
                                <HoveredLink key={branch.slug} href={`/branches/${branch.name.toLowerCase().replace(/ /g, "-")}`}>{branch.name}</HoveredLink>
                            ))}
                        </div>
                    </MenuItem>
                    <Link href="https://github.com/adityabhattad2021/Gate-Syllabus-Tracker?tab=readme-ov-file#contributing" target="_blank">
                        <span className="cursor-pointer text-white hover:text-gray-300">
                            Suggest a Feature
                        </span>
                    </Link>
                </div>
                <div className="md:hidden flex items-center">
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className="p-2 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>
                            </button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] bg-gray-900 text-white">
                            <SheetTitle className="sr-only text-2xl font-bold text-white mb-4">Menu</SheetTitle>
                            <SheetDescription className="sr-only text-gray-400 mb-4">
                                Navigate through different sections of SyllabiGenius
                            </SheetDescription>
                            <div className="flex flex-col space-y-6 mt-6">
                                <div className="flex flex-col space-y-3">
                                    <h3 className="text-xl font-semibold border-b border-gray-700 pb-2">Branches</h3>
                                    {data.branches.map((branch) => (
                                        <Link key={branch.slug} href={`/branches/${branch.name.toLowerCase().replace(/ /g, "-")}`}>
                                            <SheetClose className="text-left">
                                                <span className="block py-2 px-3 hover:bg-gray-800 rounded-md transition-colors">{branch.name}</span>
                                            </SheetClose>
                                        </Link>
                                    ))}
                                </div>
                                <div className="text-xl font-semibold pt-2">
                                    <Link href="https://github.com/adityabhattad2021/Gate-Syllabus-Tracker?tab=readme-ov-file#contributing" target="_blank">
                                        <span className="block py-2 px-3 hover:bg-gray-800 rounded-md transition-colors">Suggest a Feature</span>
                                    </Link>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>

        </div>
    );
}