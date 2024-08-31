import HeaderCard from "@/components/header-card";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import availableStreams from "@/data/available.json";
import { cn } from "@/lib/utils";

export default function AllBranchesPage() {
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center gap-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
      <HeaderCard
        className="mx-auto w-full bg-gradient-to-r from-zinc-900  to-gray-900"
      >
        <h1 className={cn("text-4xl md:text-6xl z-10 relative font-bold text-left text-background")}>Select your branch</h1>
        <p className={cn("text-l md:text-xl z-10 relative text-left mt-2 text-muted-foreground")}>
          Select a stream to get started
        </p>
      </HeaderCard>
      <div className="flex-1">
        <HoverEffect items={availableStreams.branches} />
      </div>
    </div>
  );
}
