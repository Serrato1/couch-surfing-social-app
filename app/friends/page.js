import Breadcrumb from "../../components/Breadcrumb";
const { fetchFriends } = require("../../lib/api.js");
import Image from "next/image";

export default async function PostDetail() {
  const { data: friends, error } = await fetchFriends();
  if (error) {
    return <div>Error loading friends: {error}</div>;
  }

  if (!friends || !Array.isArray(friends)) {
    return <div>No friends data available</div>;
  }

  if (friends.length === 0) {
    return <div>Sorry, you have no friends...yet!</div>;
  }

  return (
    <div>
      <Breadcrumb />
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Your Friends</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {friends.map((friend) => (
            <div
              key={friend.id}
              className="bg-white shadow-md rounded-lg p-4 flex items-center"
            >
              <Image
                src={friend.avatar}
                alt={friend.name}
                width={50}
                height={50}
                className="rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">{friend.name}</h2>
                <p className="text-gray-600">{friend.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
