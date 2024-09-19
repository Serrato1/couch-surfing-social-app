import Link from 'next/link';

export default function PostList({ posts }) {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">{post.content}</h3>
          <div className="flex justify-between text-gray-500 mb-4">
            <p>Likes: {post.likes}</p>
            <p>Comments: {post.comments}</p>
          </div>
          <Link href={`/posts/${post.id}`} className="text-primary hover:underline">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}