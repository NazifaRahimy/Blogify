import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Users",
    description:"Discover all the talented authors on Blogify — explore their profiles and see their latest posts.",
};

export interface UsersProps {
    id: string;
    name: string;
    username: string;
    email: string;
}

export default async function Users() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: UsersProps[] = await res.json();

    return (
    <div className="w-full px-10 py-10 flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold text-center my-20">All Bloggers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {users.map((user) => (
                <Link href={`/Users/${user.id}`}  key={user.id}
                className="bg-white p-5 rounded-lg shadow-md border hover:shadow-lg transition-all duration-200 flex flex-col justify-between" >
                    <h2 className="font-semibold mb-2">Name: {user.name}</h2>
                    <p className="text-gray-700 font-medium text-[15px]">Email: {user.email}</p>
                </Link>
            ))}
      </div>
    </div>
  );
}
