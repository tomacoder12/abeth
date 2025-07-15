import { NextRequest, NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.email) {
      return NextResponse.json({ error: 'Missing required parameters.' }, { status: 400 });
    }

    // Check if subscriber already exists
    const existing = await prismadb.subscribers.findUnique({
      where: { email: body.email },
    });

    if (existing) {
      return NextResponse.json(
        { message: 'This email is already subscribed.' },
        { status: 409 } // Could also be 409 Conflict
      );
    }

    const result = await prismadb.subscribers.create({
      data: {
        email: body.email,
      },
    });

    return NextResponse.json({ success: true, subscriber: result });
  } catch (error: any) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: error.message || 'Unknown error' },
      { status: 500 }
    );
  }
}
