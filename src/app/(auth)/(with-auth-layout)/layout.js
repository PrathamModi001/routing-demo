export default function WithAuthLayout({children}) {
    return (
        <div>
        <header>
            <p>WITH AUTH</p>
        </header>
        {children}
        </div>
    )
}