import Breadcrumb from "@/components/Breadcrumb";
import { fetchUser } from "../../lib/api";
import Image from "next/image";

export default async function Profile() {
  const { data: user, error } = await fetchUser();

  if (error) {
    return (
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Error</h1>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <Breadcrumb/>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">User Profile</h1>
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
          <Image
            src={user.avatar}
            alt={user.name}
            width={100}
            height={100}
            className="rounded-full mr-6"
          />
          <div>
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
