import {NextResponse} from 'next/server';
import { posts } from '../../../lib/mockData';

export async function GET() {
  return NextResponse.json(posts);
}