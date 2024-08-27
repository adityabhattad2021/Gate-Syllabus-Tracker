import { LandingHeader } from "@/components/landing-header";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex-grow flex items-center justify-center p-4 sm:p-8 md:p-16 lg:p-24">
        <div className="w-full max-w-8xl">
          <LandingHeader />
        </div>
      </div>
    </div>
  )
}
