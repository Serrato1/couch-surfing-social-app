import { currentUser } from "../../lib/mockData.js";

async function getUser() {
  return currentUser;
}

export default async function Profile() {
  const user = await getUser();

  return (
    <div>
      <h1>User Profile</h1>
      <img src={user.avatar} alt={user.name} />
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}
