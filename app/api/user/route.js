import { NextResponse } from 'next/server';
import { currentUser } from '../../../lib/mockData';

export async function GET() {
  console.log('API route hit: /api/user');
  console.log('Current user:', currentUser);
  return NextResponse.json(currentUser);
}