import { fetchPosts } from "../../lib/api";
import PostList from "../../components/PostList";
import Breadcrumb from "../../components/Breadcrumb";

export default async function Posts() {
  const { data: posts, error } = await fetchPosts();

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
      <Breadcrumb />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Friend Posts</h1>
        <PostList posts={posts} />
      </div>
    </div>
  );
}
