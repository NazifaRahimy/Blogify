"use client"
import { useState } from "react";
import { PropPost } from "@/app/Posts/page";
import Link from "next/link";
const PostClient = ({posts}: {posts : PropPost[]}) => {
      const [userFilter, setUserFilter] = useState<number | 'all'>('all')
      const fliteredUsers = userFilter === "all" ? posts : posts.filter( p => p.userId === userFilter)

    return (
        <div className="w-full h-auto p-6 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mt-24 ">📝 Posts</h1>
            <div className="mb-5 flex  justify-start  px-7 mt-12 w-full">
                <label className="mr-2 font-semibold">Filter by User:</label>
                <select value={userFilter} onChange={(e) => setUserFilter(e.target.value === 'all' ? 'all' : Number(e.target.value)) }  className="border px-2 py-1">
                    <option value="all">All Users</option>
                    {[...new Set(posts.map(p => p.userId))].map(id => (
                        <option key={id} value={id}>
                            User {id}
                        </option>
                    ))}
                </select>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl">
                {fliteredUsers.map((post) => (
                    <Link href={`/Posts/${post.id}`}  key={post.id} className="p-5 bg-white rounded-lg shadow hover:shadow-lg transition" >
                        <h4 className="font-semibold text-lg mb-2 text-gray-800">
                            {post.title}
                        </h4>
                       <p className="text-gray-600">{post.body}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
 
export default PostClient;