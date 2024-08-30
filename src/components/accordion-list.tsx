"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Subject } from "@/types/syllabus";
import { BackgroundBeams } from "@/components/ui/background-beans";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ReactConfetti = dynamic(() => import('react-confetti'), { ssr: false });

interface AccordionListProps {
    subjectData: Subject;
}

export default function AccordionList({
    subjectData
}: AccordionListProps) {

    const [showConfetti, setShowConfetti] = useState(false);

    const [isChapterChecked, setIsChapterChecked] = useState<boolean[]>(()=> subjectData.chapters.map(() => false));

    const [isTopicChecked, setIsTopicChecked] = useState<boolean[][]>(()=>subjectData.chapters.map(chapter => chapter.topics.map(() => false)));

    useEffect(()=>{
        const storedChapterData = JSON.parse(localStorage.getItem(`${isChapterChecked}-${subjectData.name}`) || 'false') || subjectData.chapters.map(() => false)
        const storedTopicData = JSON.parse(localStorage.getItem(`${isTopicChecked}-${subjectData.name}`) || 'false') || subjectData.chapters.map(chapter => chapter.topics.map(() => false))
        setIsChapterChecked(storedChapterData);
        setIsTopicChecked(storedTopicData);
    },[subjectData,isChapterChecked,isTopicChecked])

    useEffect(() => {
        localStorage.setItem(`${isChapterChecked}-${subjectData.name}`, JSON.stringify(isChapterChecked));
        localStorage.setItem(`${isTopicChecked}-${subjectData.name}`, JSON.stringify(isTopicChecked));
    }, [isChapterChecked, isTopicChecked,subjectData.name])

    const isAllTopicsChecked = (chapterIndex: number): boolean => {
        return isTopicChecked[chapterIndex].every(topic => topic);
    };

    const checkIsChapterChecked = (chapterIndex: number): boolean => {
        return (isTopicChecked[chapterIndex].length !== 0 && isAllTopicsChecked(chapterIndex)) || isChapterChecked[chapterIndex];
    };

    const handleChapterCheckChange = (checked: boolean, chapterIndex: number) => {
        setIsChapterChecked(prev => {
            const newChecked = [...prev];
            newChecked[chapterIndex] = checked;
            return newChecked;
        });
        setIsTopicChecked(prev => {
            const newChecked = [...prev];
            newChecked[chapterIndex] = newChecked[chapterIndex].map(() => checked);
            return newChecked;
        });

        if (checked) {
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 2500);
        }
    };

    const handleTopicCheckChange = (checked: boolean, chapterIndex: number, topicIndex: number) => {
        setIsTopicChecked(prev => {
            const newChecked = [...prev];
            newChecked[chapterIndex][topicIndex] = checked;
            return newChecked;
        });
        if (isTopicChecked[chapterIndex].every(topic => topic)) {
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 2500);
        }
    };

    return (
        <>
            {showConfetti &&
                <ReactConfetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    recycle={false}
                    numberOfPieces={600}
                />}
            <Accordion type="multiple" className="w-full space-y-4">
                {subjectData.chapters.map((chapter, index) => (
                    <AccordionItem
                        value={`chapter-${index}`}
                        key={index}
                        className="border border-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
                    >
                        <div className="relative isolate overflow-hidden flex items-center justify-between w-full text-left py-6 px-6 bg-gradient-to-r from-zinc-800 to-gray-900 hover:bg-gray-800 transition-colors duration-200">
                            <BackgroundBeams className="z-0 w-full" svgViewBox="0 0 596 156" />
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-6 h-10 w-10 text-bold text-secondary">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                </svg>
                                <div className="flex flex-col gap-2">
                                    <span className="font-semibold text-lg text-zinc-100">{chapter.name}</span>
                                    <p className="text-zinc-300 text-sm">{chapter.description}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox
                                    onCheckedChange={(checked: boolean) => handleChapterCheckChange(checked, index)}
                                    checked={checkIsChapterChecked(index)}
                                    className="z-50 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background w-5 h-5 border-2 border-secondary"
                                />
                                <Link
                                    target="_blank"
                                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(`${chapter.name} ${subjectData.name} gate 2024`)}`}
                                    className="p-2 rounded-full z-50  transition-colors duration-200 right-6"
                                    title="Watch on YouTube"
                                    aria-label="Watch on YouTube"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="text-white"
                                    >
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                    </svg>
                                </Link>
                                <AccordionTrigger disabled={chapter.topics.length === 0} className={cn("z-50", chapter.topics.length === 0 && "cursor-not-allowed")}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className={`h-5 w-5 transition-transform duration-200 ${chapter.topics.length === 0 ? 'text-zinc-600' : 'text-zinc-400'
                                            }`}
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                    {chapter.topics.length === 0 && (
                                        <span className="sr-only">No topics available</span>
                                    )}
                                </AccordionTrigger>
                            </div>
                        </div>
                        {chapter?.topics.length > 0 && (
                            <AccordionContent className="px-6 py-4 bg-gray-900 border-t border-zinc-700">
                                <ul className="space-y-3">
                                    {chapter.topics.map((topic, topicIndex) => (
                                        <li key={topicIndex} className="text-base text-zinc-200 hover:text-secondary transition-colors duration-200 bg-zinc-800 rounded-md p-3 flex items-center justify-between">
                                            <span>{topic}</span>
                                            <div className="flex items-center gap-2">
                                                <Checkbox
                                                    className="z-50 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background  border-2 border-secondary"
                                                    onCheckedChange={(checked: boolean) => handleTopicCheckChange(checked, index, topicIndex)}
                                                    checked={isTopicChecked[index][topicIndex] || isChapterChecked[index]}
                                                />
                                                <Link
                                                    target="_blank"
                                                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(topic)}`}
                                                    className="p-2+rounded-full+bg-red-600+hover:bg-red-700+transition-colors+duration-200"
                                                    title="Watch+on+YouTube"
                                                    aria-label="Watch+on+YouTube"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="text-white"
                                                    >
                                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </AccordionContent>
                        )}
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}