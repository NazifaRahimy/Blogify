// app/components/Footer.tsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 px-10 py-6 mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-gray-600">&copy; {new Date().getFullYear()} Blogify. All rights reserved.</p>
      <nav className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/Users">Users</Link>
        <Link href="/Posts">Posts</Link>
        <Link href="/About">About</Link>
        <Link href="/Contact">Contact</Link>
      </nav>
    </footer>
  );
}

export default Footer;
