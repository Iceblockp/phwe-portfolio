import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useGetAllBlogs, useGetFeatureBlog } from '@/lib/hooks/blog_hook'

export default function Home() {

  const { data: blogPosts } = useGetAllBlogs()
  const { data: featuredPost } = useGetFeatureBlog()


  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <section className="mb-12 animate-slide-up">
        <h2 className="text-4xl font-bold mb-6 text-primary">Featured Post</h2>
        {featuredPost && (
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Image src={featuredPost.image || "/placeholder.svg"} alt={featuredPost.title} width={800} height={400} className="w-full h-64 object-cover" />
            <CardHeader>
              <CardTitle className="text-2xl text-primary">{featuredPost.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {/* <p className="text-muted-foreground mb-4">{featuredPost.excerpt}</p> */}
              <p className="text-sm text-muted-foreground">
                {featuredPost.date} • By {featuredPost.author}
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/blog/${featuredPost.slug}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        )}
      </section>

      <section className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-3xl font-bold mb-6 text-primary">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} width={300} height={200} className="w-full h-40 object-cover" />
              <CardHeader>
                <CardTitle className="text-lg text-primary">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/blog/${post.slug}`} className="text-blue-400 hover:text-blue-300 transition-colors">Read More</Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

