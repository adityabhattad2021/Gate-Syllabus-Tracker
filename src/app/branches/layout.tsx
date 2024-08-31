export default function InnerLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="mt-32 md:mt-14">
            {children}
        </div>
    )
}