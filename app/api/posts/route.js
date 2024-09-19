import { NextResponse } from 'next/server';
import { posts } from '../../../lib/mockData';

export async function GET(request) {
  // Check if an ID is provided in the URL
  const id = request.nextUrl.searchParams.get('id');
  
  if (id) {
    // If the ID is provided, return that specific post
    const post = posts.find(p => p.id === parseInt(id));
    if (post) {
      return NextResponse.json(post);
    } else {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
  } else {
    // If no ID is provided, return all of the posts available
    return NextResponse.json(posts);
  }
}