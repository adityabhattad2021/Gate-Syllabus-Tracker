import AccordionList from "@/components/accordion-list";
import HeaderCard from "@/components/header-card";
import data from "@/data/syllabus/data.json";
import { Subject, SyllabusData } from "@/types/syllabus";
import { redirect } from "next/navigation";



interface SubjectPageProps {
    params: {
        subjectSlug: string;
        branchSlug: string;
    }
}

export default function SubjectPage({ params }: SubjectPageProps) {
    const { subjectSlug, branchSlug } = params;

    const typedData = data as SyllabusData;

    if (!(branchSlug in typedData)) {
        redirect("/branches");
    }

    const subjectData: Subject | undefined = typedData[branchSlug].subjects.find(subject => subject.name.toLowerCase().replace(/ /g, "-") === subjectSlug);

    if (!subjectData) {
        redirect(`/branches/${branchSlug}`);
    }

    return (
        <div className="flex-1 w-full flex flex-col items-center justify-center mt-24 gap-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
            <HeaderCard
                className="mx-auto w-full bg-gradient-to-r from-zinc-800  to-gray-900"
            >
                <h1 className="text-3xl md:text-5xl z-10 relative font-bold text-left text-background">
                    {subjectData.name}
                </h1>
                <p className="text-l md:text-xl z-10 relative text-left mt-2 text-muted-foreground">
                    {subjectData.description}
                </p>
            </HeaderCard>
            <AccordionList subjectData={subjectData} />
        </div>
    )
}