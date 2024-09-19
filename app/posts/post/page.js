import { posts } from '../../lib/mockData';
import PostList from '../../components/PostList';

async function getPosts() {
  return posts;
}

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Friend Posts</h1>
      <PostList posts={posts} />
    </div>
  );
}