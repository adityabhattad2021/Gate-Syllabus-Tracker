import { Checkbox } from "@/components/ui/checkbox"
import YouTubeLink from "./youtube-link"

interface TopicListProps {
    topics: string[]
    chapterIndex: number
    isTopicChecked: boolean[][]
    isChapterChecked: boolean[]
    handleTopicCheckChange: (checked: boolean, chapterIndex: number, topicIndex: number) => void
  }
  
export default  function TopicList({ topics, chapterIndex, isTopicChecked, isChapterChecked, handleTopicCheckChange }: TopicListProps) {
    return (
      <ul className="space-y-3">
        {topics.map((topic, topicIndex) => (
          <li key={topicIndex} className="text-base text-zinc-200 hover:text-secondary transition-colors duration-200 bg-zinc-800 rounded-md p-3 flex items-center justify-between">
            <span>{topic}</span>
            <div className="flex items-center gap-2">
              <Checkbox
                className="z-50 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background border-2 border-secondary"
                onCheckedChange={(checked: boolean) => handleTopicCheckChange(checked, chapterIndex, topicIndex)}
                checked={isTopicChecked[chapterIndex][topicIndex] || isChapterChecked[chapterIndex]}
              />
              <YouTubeLink searchQuery={topic} />
            </div>
          </li>
        ))}
      </ul>
    )
  }