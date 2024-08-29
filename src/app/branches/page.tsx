import HeaderCard from "@/components/header-card";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import availableStreams from "@/data/available.json";

export default function AllBranchesPage() {
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center mt-24 gap-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
      <HeaderCard
        title="Select your branch"
        description="Select a stream to get started"
        className="mx-auto w-full bg-gradient-to-r from-zinc-900  to-gray-900"
        titleClassName="text-4xl md:text-5xl"
      />
      <div className="flex-1">
        <HoverEffect items={availableStreams.branches} />
      </div>
    </div>
  );
}
