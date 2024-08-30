import HeaderCard from "@/components/header-card";
import { HoverEffect, HoverEffectItem } from "@/components/ui/card-hover-effect";
import data from "@/data/syllabus/data.json";
import { Branch, SyllabusData } from "@/types/syllabus";
import { redirect } from "next/navigation";


interface BranchPageProps {
  params: {
    branchSlug: string;
  };
}

export default function BranchPage({ params }: BranchPageProps) {
  const { branchSlug } = params;
  const typedData = data as SyllabusData;
  if (!(branchSlug in data)) {
    redirect("/branches");
  }

  const branchData: Branch = typedData[branchSlug];

  const subjectsForHoverEffect: HoverEffectItem[] = typedData[branchSlug].subjects.map((subject) => ({
    name: subject.name,
    description: subject.description,
    slug: subject.name.toLowerCase().replace(/ /g, "-"),
    url: `/branches/${branchSlug}/subjects/${subject.name.toLowerCase().replace(/ /g, "-")}`,
  }));


  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center mt-24 gap-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
      <HeaderCard
        className="mx-auto w-full bg-gradient-to-r from-zinc-800  to-gray-900"
      >
        <h1 className="text-3xl md:text-4xl z-10 relative font-bold text-left text-background">{branchData.name}</h1>
        <p className="text-l md:text-xl z-10 relative text-left mt-2 text-muted-foreground">
          {branchData.description}
        </p>
      </HeaderCard>
      <div className="flex-1">
        <HoverEffect items={subjectsForHoverEffect} />
      </div>
    </div>
  );
}  