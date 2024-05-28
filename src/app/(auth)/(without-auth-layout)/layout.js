export default function WithoutAuthLayout({children}) {
    return (
        <div>
        {children}
        <footer>
            <p>WITHOUT AUTH</p>
        </footer>
        </div>
    )
}