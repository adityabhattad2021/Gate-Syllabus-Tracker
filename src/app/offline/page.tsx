export default function OfflinePage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <h1 className="text-6xl font-bold text-white">
                You are offline
            </h1>

            <p className="mt-3 text-2xl text-zinc-400">
                Please check your internet connection and try again.
            </p>
        </div>
    )
}