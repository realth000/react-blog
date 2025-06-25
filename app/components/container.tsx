
export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="dark bg-background text-foreground max-h-full">
                {children}
            </div>
        </>
    )
}