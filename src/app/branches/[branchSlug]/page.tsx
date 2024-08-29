import HeaderCard from "@/components/header-card";
import { HoverEffect, HoverEffectItem } from "@/components/ui/card-hover-effect";
import data from "@/data/syllabus/data.json";
import { Branch, SyllabusData } from "@/types/syllabus";
import { redirect } from "next/navigation";


interface SubjectPageProps {
  params: {
    branchSlug: string;
  };
}

export default function SubjectPage({ params }: SubjectPageProps) {
  const { branchSlug } = params;
  const typedData = data as SyllabusData;
  if (!(branchSlug in data)) {
    redirect("/branches");
  }

  const subjectsForHoverEffect: HoverEffectItem[] = typedData[branchSlug].subjects.map((subject) => ({
    name: subject.name,
    description: subject.description,
    slug: subject.name.toLowerCase().replace(/ /g, "-"),
    url: `/branches/${branchSlug}/subjects/${subject.name.toLowerCase().replace(/ /g, "-")}`,
  }));

  const branchData: Branch = typedData[branchSlug];
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center mt-24 gap-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
      <HeaderCard
        title={branchData.name}
        description={branchData.description}
        className="mx-auto w-full bg-gradient-to-r from-zinc-900  to-gray-900"
        titleClassName="text-3xl md:text-4xl"
      />
      <div className="flex-1">
        <HoverEffect items={subjectsForHoverEffect} />
      </div>
    </div>
  );
}  