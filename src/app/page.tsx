import { LandingHeader } from "@/components/landing-header";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-slate-900 overflow-hidden">
      <main className="flex-grow flex items-center justify-center p-4 sm:p-8 md:p-16 lg:p-24 mt-24">
        <div className="w-full max-w-7xl">
          <LandingHeader />
        </div>
      </main>
    </div>
  )
}
