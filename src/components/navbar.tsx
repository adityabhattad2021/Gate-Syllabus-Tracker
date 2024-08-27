"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

interface NavbarProps {
    className?: string;
}

const availableStreams = [
    "Computer Science and Engineering",
]


export default function Navbar({ className }: NavbarProps) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-4 inset-x-0 mx-auto w-[80%] z-50", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Streams">
                    <div className="flex flex-col space-y-4 text-sm">
                        {availableStreams.map((stream) => (
                            <HoveredLink href={`/streams/${stream.toLowerCase().replace(/ /g, "-")}`}>{stream}</HoveredLink>
                        ))}
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Feedback">
                    <div className="flex flex-col space-y-4 text-sm">
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