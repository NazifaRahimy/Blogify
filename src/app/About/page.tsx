import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "About Us",
   description: "Learn more about Blogify, our mission and team.",
};

const About = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">About Blogify</h1>
        <p className="max-w-2xl text-gray-700 text-lg text-justify">
          Welcome to Blogify! This is a simple blog platform where you can read posts, 
          explore different authors, and stay updated with the latest content. 
          Our mission is to provide an easy-to-use, responsive, and user-friendly 
          blogging experience for everyone.
        </p>
    </div>
  );
}

export default About;
