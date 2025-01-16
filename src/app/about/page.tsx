import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">About Us</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Our Story</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">
                        Welcome to MyBlog, a platform dedicated to sharing insights and stories about technology, design, and more. Founded in 2023, we&apos;ve been on a mission to provide valuable content to our readers and foster a community of lifelong learners.
                    </p>
                    <p className="mb-4">
                        Our team of passionate writers and industry experts work tirelessly to bring you the latest trends, in-depth analyses, and practical tips that you can apply in your personal and professional life.
                    </p>
                    <p>
                        We believe in the power of knowledge sharing and the impact it can have on individuals and communities. Through our blog, we aim to inspire, educate, and empower our readers to embrace technology and design in innovative ways.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}

