"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Subject } from "@/types/syllabus";
import { useCallback, useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import TopicList from "@/components/topic-list";
import ChapterHeader from "@/components/chapter-header";

const ReactConfetti = dynamic(() => import('react-confetti'), { ssr: false });

interface AccordionListProps {
    subjectData: Subject;
}

export default function AccordionList({
    subjectData
}: AccordionListProps) {

    const [showConfetti, setShowConfetti] = useState(false)
    const [isChapterChecked, setIsChapterChecked] = useState<boolean[]>(() =>
        new Array(subjectData.chapters.length).fill(false)
    )
    const [isTopicChecked, setIsTopicChecked] = useState<boolean[][]>(() =>
        subjectData.chapters.map(chapter => new Array(chapter.topics.length).fill(false))
    )

    useEffect(() => {
        const storedChapterData = JSON.parse(localStorage.getItem(`isChapterChecked-${subjectData.name}`) || 'null')
        const storedTopicData = JSON.parse(localStorage.getItem(`isTopicChecked-${subjectData.name}`) || 'null')

        if (storedChapterData) setIsChapterChecked(storedChapterData)
        if (storedTopicData) setIsTopicChecked(storedTopicData)
    }, [subjectData.name])


    useEffect(() => {
        localStorage.setItem(`isChapterChecked-${subjectData.name}`, JSON.stringify(isChapterChecked))
        localStorage.setItem(`isTopicChecked-${subjectData.name}`, JSON.stringify(isTopicChecked))
    }, [isChapterChecked, isTopicChecked, subjectData.name])

    const isAllTopicsChecked = useCallback((chapterIndex: number): boolean => {
        return isTopicChecked[chapterIndex].every(topic => topic)
    }, [isTopicChecked])

    const checkIsChapterChecked = useCallback((chapterIndex: number): boolean => {
        return (isTopicChecked[chapterIndex].length !== 0 && isAllTopicsChecked(chapterIndex)) || isChapterChecked[chapterIndex]
    }, [isChapterChecked, isTopicChecked, isAllTopicsChecked])

    const handleChapterCheckChange = useCallback((checked: boolean, chapterIndex: number) => {
        setIsChapterChecked(prev => {
            const newChecked = [...prev]
            newChecked[chapterIndex] = checked
            return newChecked
        })
        setIsTopicChecked(prev => {
            const newChecked = [...prev]
            newChecked[chapterIndex] = newChecked[chapterIndex].map(() => checked)
            return newChecked
        })

        if (checked) {
            setShowConfetti(true)
            setTimeout(() => setShowConfetti(false), 2500)
        }
    }, [])

    const handleTopicCheckChange = useCallback((checked: boolean, chapterIndex: number, topicIndex: number) => {
        setIsTopicChecked(prev => {
            const newChecked = [...prev]
            newChecked[chapterIndex][topicIndex] = checked
            return newChecked
        })
        if (isTopicChecked[chapterIndex].every(topic => topic)) {
            setShowConfetti(true)
            setTimeout(() => setShowConfetti(false), 2500)
        }
    }, [isTopicChecked])

    const memoizedChapters = useMemo(() => subjectData.chapters.map((chapter, index) => (
        <AccordionItem
            value={`chapter-${index}`}
            key={index}
            className="border border-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
        >
            <ChapterHeader
                chapter={chapter}
                index={index}
                checkIsChapterChecked={checkIsChapterChecked}
                handleChapterCheckChange={handleChapterCheckChange}
                subjectName={subjectData.name}
            />
            {chapter.topics.length > 0 && (
                <AccordionContent className="px-6 py-4 bg-gray-900 border-t border-zinc-700">
                    <TopicList
                        topics={chapter.topics}
                        chapterIndex={index}
                        isTopicChecked={isTopicChecked}
                        isChapterChecked={isChapterChecked}
                        handleTopicCheckChange={handleTopicCheckChange}
                    />
                </AccordionContent>
            )}
        </AccordionItem>
    )), [subjectData.chapters, checkIsChapterChecked, handleChapterCheckChange, isTopicChecked, isChapterChecked, handleTopicCheckChange])

    return (
        <>
            {showConfetti && (
                <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1000 }}>
                    <ReactConfetti
                        width={window.innerWidth}
                        height={window.innerHeight}
                        recycle={false}
                        numberOfPieces={600}
                    />
                </div>
            )}
            <Accordion type="multiple" className="w-full space-y-4">
                {memoizedChapters}
            </Accordion>
        </>
    )
}