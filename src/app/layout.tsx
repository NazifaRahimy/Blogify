import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Fotter";




export const metadata: Metadata = {
  title: {
 default: "Home", 
 template: "Blogify | %s"
  },
  description: "Blogify is your go-to platform for reading posts, exploring authors, and discovering interesting content every day."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <div>
          <Header />
           {children}
           <Footer />
        </div>
      </body>
    </html>
  );
}
