import Link from "next/link";
 
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface PropId {
    params: { id: string };
}

interface UserProps {
    id: number;
    name: string;
    username: string;
    email: string;
    address?: {
        street?: string;
        suite?: string;
        city?: string;
        zipcode?: string;
        geo?: { lat?: string; lng?: string };
    };
    phone?: string;
    website?: string;
    company?: { name?: string; catchPhrase?: string; bs?: string };
}

const UserDetails = async ({ params }: PropId) => {
    const {id} = await params
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${Number(id)}`);
    if (!res.ok) {
        return <p className="text-center mt-10 text-red-500">User not found.</p>;
    }
    const user: UserProps = await res.json();
    return (
    <div className=" px-10 h-screen justify-center py-10 flex flex-col items-center">
        <div className="w-full md:max-w-xl bg-white p-6 rounded-lg shadow-md mb-10">
            <h2 className="text-3xl font-bold mb-3">{user.name}</h2>
            <p className="text-gray-600 mb-1">Username: @{user.username}</p>
            <p className="text-gray-600 mb-1">Email: {user.email}</p>
            <p className="text-gray-600 mb-1"> Address: {user.address?.street}, {user.address?.suite} {user.address?.city}</p>
            <p className="text-gray-600 mb-1">Phone: {user.phone}</p>
            <p className="text-gray-600 mb-1">Website: {user.website}</p>
            <p className="text-gray-600"> Company: {user.company?.name} - {user.company?.catchPhrase}</p>
        </div>
        <div className="flex flex-col md:flex-row  mt-5 md:mt-0 justify-between items-center w-full max-w-xl">
            <h3 className="text-lg lg:text-2xl font-bold mb-5"> Posts by <span className="text-green-500">{user.name}</span></h3>
            <Link  href="/Users" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200 shadow-sm hover:shadow-md" >  ← Back to Users</Link>
        </div>
    </div>
  );
};

export default UserDetails;
