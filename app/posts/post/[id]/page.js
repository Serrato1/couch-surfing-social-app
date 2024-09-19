import { posts } from "../../../lib/mockData";

async function getPost(id) {
  if (!id) return;
  return posts.find((p) => p.id === parseInt(id));
}

export default async function PostDetail({ params }) {
  const post = await getPost(params.id);

  if (!post) return <div>Post not found</div>;

  return (
    <div>
      <h1>Post Detail</h1>
      <p>{post.content}</p>
      <p>Likes: {post.likes}</p>
      <p>Comments: {post.comments}</p>
    </div>
  );
}
