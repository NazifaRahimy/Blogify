import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-5 md:px-10 text-center gap-6">
        <h1 className="text-3xl md:text-5xl font-bold">Welcome to Blogify</h1>
        <p className="text-gray-600 max-w-xl text-justify"> Discover our users and posts! Blogify lets you browse blog posts,  check user profiles, and get to know more about our platform. </p>
        <div className="flex gap-4 mt-6 flex-wrap justify-center">
            <Link href="/Users" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Users </Link>
            <Link href="/Posts" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"> Posts</Link>
            <Link href="/About" className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">  About </Link>
        </div>
    </div>
  );
}
