import Link from "next/link";

interface PropId {
  params: { id: string };
}

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const PostDetails = async ({ params }: PropId) => {
    const {id} = await params
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${Number(id)}`);
  
    if (!res.ok) {
        return <p className="text-center mt-10 text-red-500">Post not found.</p>;
    }
    const post: Post = await res.json();

    return (
        <div className="w-full h-auto md:h-screen flex items-center justify-center p-12 md:p-0">
            <div className="w-full  md:max-w-3xl mx-auto p-8 mt-12 bg-white rounded-lg shadow ">
                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                <p className="text-gray-700 mb-8 leading-relaxed">{post.body}</p>
                <p className="text-gray-500 mb-6">Author ID: {post.userId}</p>
                <Link  href={`/Users/${post.userId}`}  className="text-blue-500 hover:underline" > View Author Profile</Link>
            </div>
        </div>
    );
};

export default PostDetails;
