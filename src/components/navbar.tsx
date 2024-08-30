"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import data from "@/data/available.json"
import { cn } from "@/lib/utils";

interface NavbarProps {
    className?: string;
}


export default function Navbar({ className }: NavbarProps) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-4 inset-x-0 mx-auto w-[88%] z-50", className)}
        >
            <Menu setActive={setActive} >
                <MenuItem setActive={setActive} active={active} item="Branches" >
                    <div className="flex flex-col space-y-4 text-sm bg-gray-800">
                        {data.branches.map((branch) => (
                            <HoveredLink key={branch} href={`/branches/${branch.name.toLowerCase().replace(/ /g, "-")}`}>{branch}</HoveredLink>
                        ))}
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Feedback">
                    <div className="flex flex-col space-y-4 text-sm bg-gray-800">
                        <HoveredLink href="#">
                            LinkedIn
                        </HoveredLink>
                        <HoveredLink href="#">
                            X
                        </HoveredLink>
                        <HoveredLink href="#">
                            Github
                        </HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}