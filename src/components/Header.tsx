"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/Users", label: "Users" },
        { href: "/Posts", label: "Posts" },
        { href: "/About", label: "About" },
        { href: "/Contact", label: "Contact" },
    ];

  return (
    <header className="w-full bg-gray-100 shadow-sm fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600"> Blogify </Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-800" aria-label="Toggle Menu" >  {menuOpen ?<FaTimes size={26} /> : <FaBars size={26} /> }</button>
            <nav className={` absolute md:static left-0 top-16 w-full md:w-auto  bg-white md:bg-transparent shadow-md md:shadow-none  flex flex-col md:flex-row p-6 md:p-0 md:items-center gap-4 md:gap-6 transition-all duration-300 ease-in-out   ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible md:visible md:opacity-100"}`}>
                {navItems.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className={` py-2 px-4 rounded-md text-gray-700  transition  ${pathname === item.href ? "text-blue-600 font-semibold" : ""}   md:hover:bg-transparent `}>
                        {item.label}
                    </Link>
                ))}
            </nav>
         </div>
    </header>
  );
};

export default Header;

