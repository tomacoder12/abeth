import prismadb from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const tickets = await prismadb.ticket.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(tickets);
  } catch (error) {
    console.error('Error fetching tickets:', error);
    return NextResponse.json({ error: 'Failed to fetch tickets' }, { status: 500 });
  }
}
