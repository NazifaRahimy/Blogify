import Link from "next/link";

export default function NotFound() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <h1 className="text-6xl font-bold text-red-500 mb-6">404</h1>
            <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-gray-700 mb-6 text-center max-w-md">The page you are looking for does not exist or may have been moved.</p>
            <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition" >  ← Go Back Home</Link>
        </div>
    );
}
