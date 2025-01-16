import { blogPosts } from "../data/blogs"

export const useGetAllBlogs = () => {
    return { data: blogPosts }
}

export const useGetDetailBlogs = (slug: string) => {
    const data = blogPosts.find(blog => blog.slug == slug)
    return { data }
}

export const useGetFeatureBlog = () => {
    const data = blogPosts.find((blog, index) => index == 0)
    return { data }
}

export const useGetRelatedBlogs = (slug: string) => {
    const data = blogPosts.filter(blog => blog.slug != slug)
    return { data }
}