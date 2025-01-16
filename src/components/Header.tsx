import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
    return (
        <header className="bg-accent/50 backdrop-blur-sm sticky top-0 z-10 shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
                    MyBlog
                </Link>
                <nav className="hidden md:flex space-x-4">
                    <Link href="/" className="text-primary/80 hover:text-primary transition-colors">Home</Link>
                    <Link href="/about" className="text-primary/80 hover:text-primary transition-colors">About</Link>
                    <Link href="/contact" className="text-primary/80 hover:text-primary transition-colors">Contact</Link>
                </nav>
                <Button variant="outline" className="md:hidden">Menu</Button>
            </div>
        </header>
    )
}

