export default function InnerLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="mt-32 md:mt-20">
            {children}
        </div>
    )
}