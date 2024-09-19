import { posts } from "../../../lib/mockData.js";
import Breadcrumb from "../../../components/Breadcrumb";

async function getPost(id) {
  return posts.find((p) => p.id === parseInt(id));
}

export default async function PostDetail({ params }) {
  const post = await getPost(params.id);

  if (!post) return <div className="text-red-500">Post not found</div>;

  return (
    <div>
      <Breadcrumb />
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Post Detail</h1>
        <p className="text-lg mb-4">{post.content}</p>
        <div className="flex justify-between text-gray-500">
          <p>Likes: {post.likes}</p>
          <p>Comments: {post.comments}</p>
        </div>
      </div>
    </div>
  );
}
