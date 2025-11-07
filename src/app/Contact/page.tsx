import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Blogify for support, questions, or collaboration opportunities. We’re always happy to hear from you!",
};

const Contact = () => {
   return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 ">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">Contact Us</h1>
        <p className="max-w-2xl text-gray-700 text-lg text-center mb-4">
         We'd love to hear from you! If you have any questions, suggestions, or 
        feedback, feel free to reach out to us. 
        </p>
        <p className="text-gray-700 text-lg text-center">
            Email: <span className="text-blue-600">contact@blogify.com</span> <br />
            Phone: <span className="text-blue-600">+1 (555) 123-4567</span>
        </p>
    </div>
  );
}

export default Contact;
