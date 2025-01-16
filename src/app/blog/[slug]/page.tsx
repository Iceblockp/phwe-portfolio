'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { useGetDetailBlogs, useGetRelatedBlogs } from '@/lib/hooks/blog_hook'
import { useParams } from 'next/navigation'



export default function BlogPostPage() {
    const { slug } = useParams()
    const { data: blogPost } = useGetDetailBlogs(String(slug));
    const { data: relatedBlogs } = useGetRelatedBlogs(String(slug))
    return (
        <div className="container mx-auto px-4 py-8 animate-fade-in">
            {blogPost && (
                <Card className="mb-12 overflow-hidden animate-slide-up">
                    <Image src={blogPost.image || "/placeholder.svg"} alt={blogPost.title} width={800} height={400} className="w-full h-64 object-cover" />
                    <CardHeader>
                        <CardTitle className="text-3xl text-primary">{blogPost.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="mb-4 text-sm text-muted-foreground">
                            {blogPost.date} • By {blogPost.author}
                        </div>
                        <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: blogPost.content }} />
                    </CardContent>
                </Card>
            )}

            <section className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-2xl font-bold mb-6 text-primary">Related Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedBlogs?.map((post, index) => (
                        <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
                            <Image src={post.image || "/placeholder.svg"} alt={post.title} width={300} height={200} className="w-full h-40 object-cover" />
                            <CardHeader>
                                <CardTitle className="text-lg text-primary">{post.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{post.date}</p>
                            </CardContent>
                            <CardFooter className="mt-auto">
                                <Link href={`/blog/${post.slug}`} className="text-blue-400 hover:text-blue-300 transition-colors">Read More</Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    )
}

