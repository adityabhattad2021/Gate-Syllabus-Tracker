import HeaderCard from "@/components/header-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BackgroundBeams } from "@/components/ui/background-beans";
import data from "@/data/syllabus/data.json";
import { Subject, SyllabusData } from "@/types/syllabus";
import { BookOpen, ChevronDown, ChevronRight } from "lucide-react";
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
                className="mx-auto w-full bg-gradient-to-r from-zinc-900  to-gray-900"
            >
                <h1 className="text-3xl md:text-5xl z-10 relative font-bold text-left text-background">
                    {subjectData.name}
                </h1>
                <p className="text-l md:text-xl z-10 relative text-left mt-2 text-muted-foreground">
                    {subjectData.description}
                </p>
            </HeaderCard>
            <Accordion type="multiple" className="w-full space-y-4">
                {subjectData.chapters.map((chapter, index) => (
                    <AccordionItem
                        value={`chapter-${index}`}
                        key={index}
                        className="border border-gary-900 rounded-lg overflow-hidden"
                    >
                        <AccordionTrigger className="relative isolate overflow-hidden flex items-center justify-between w-full text-left py-6 px-6 bg-gradient-to-r from-zinc-900  to-gray-900 hover:bg-gray-900 transition-colors duration-200">
                            <BackgroundBeams className="z-0 w-full" svgViewBox="0 0 596 156" />
                            <div className="flex items-center">
                                <BookOpen className="mr-6 h-10 w-10 text-bold text-secondary" />
                                <div className="flex flex-col gap-2">
                                    <span className="font-semibold text-lg text-zinc-100">{chapter.name}</span>
                                    <p className="text-zinc-300">{chapter.description}</p>
                                </div>
                            </div>
                            {chapter.topics.length > 0 && <ChevronDown className="h-5 w-5 text-zinc-400 transition-transform duration-200" />}
                        </AccordionTrigger>
                        {chapter.topics.length > 0 && <AccordionContent className="px-6 py-4 bg-zinc-900">
                            <ul className="space-y-2">
                                {chapter.topics.map((topic, topicIndex) => (
                                    <li key={topicIndex} className="flex items-center text-sm text-gray-200">
                                        <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                                        {topic}
                                    </li>
                                ))}
                            </ul>
                        </AccordionContent>}
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}