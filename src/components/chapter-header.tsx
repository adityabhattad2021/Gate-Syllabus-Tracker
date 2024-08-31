import { BackgroundBeams } from "@/components/ui/background-beans"
import { Checkbox } from "@/components/ui/checkbox"
import { Subject } from "@/types/syllabus"
import { AccordionTrigger } from "@/components/ui/accordion"
import YouTubeLink from "@/components/youtube-link"
import { cn } from "@/lib/utils"

interface ChapterHeaderProps {
    chapter: Subject['chapters'][number]
    index: number
    checkIsChapterChecked: (index: number) => boolean
    handleChapterCheckChange: (checked: boolean, index: number) => void
    subjectName: string
  }
  
 export default function ChapterHeader({ chapter, index, checkIsChapterChecked, handleChapterCheckChange, subjectName }: ChapterHeaderProps) {
    return (
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
          <YouTubeLink searchQuery={`${chapter.name} ${subjectName} Gate 2025`} />
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
              className={`h-5 w-5 transition-transform duration-200 ${chapter.topics.length === 0 ? 'text-zinc-600' : 'text-zinc-400'}`}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
            {chapter.topics.length === 0 && (
              <span className="sr-only">No topics available</span>
            )}
          </AccordionTrigger>
        </div>
      </div>
    )
  }