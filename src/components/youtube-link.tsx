import Link from "next/link";

export default function YouTubeLink({ searchQuery }: { searchQuery: string }) {
    return (
      <Link
        target="_blank"
        href={`https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`}
        className="p-2 rounded-full z-50 transition-colors duration-200"
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
    )
  }