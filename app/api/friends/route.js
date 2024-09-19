// app/api/friends/route.js
import { NextResponse } from 'next/server';
import { friends } from '../../../lib/mockData';

export async function GET() {
  console.log('API route hit: /api/friends');
  console.log('Returning friends:', friends);
  return NextResponse.json(friends);
}