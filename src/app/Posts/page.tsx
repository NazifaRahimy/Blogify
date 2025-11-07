 import type { Metadata } from "next";
import PostClient from "@/components/PostClient";
export const metadata: Metadata = {
    title: "Posts",
    description: "Explore the latest posts on Blogify — read stories, insights, and articles from different authors around the world.",
};

export interface PropPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const Posts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-store",});
    const posts: PropPost[] = await res.json();

    return ( <PostClient posts={posts} />);
};

export default Posts;
