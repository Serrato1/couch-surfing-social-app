import Link from 'next/link';

export default function PostList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.content}</h3>
          <p>Likes: {post.likes} | Comments: {post.comments}</p>
          <Link href={`/posts/${post.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}