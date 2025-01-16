import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-accent/50 backdrop-blur-sm mt-8">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-4 text-primary">MyBlog</h2>
                        <p className="text-muted-foreground">Sharing insights and stories about technology, design, and more.</p>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h3 className="text-lg font-semibold mb-4 text-primary">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Facebook</a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-accent text-center text-muted-foreground">
                    <p>&copy; 2023 MyBlog. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

