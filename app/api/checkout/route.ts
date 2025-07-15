import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import prismadb from '@/lib/prismadb';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-06-30.basil',
  typescript: true,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      bookedTime,
      price,
      quantity = 1,
      serviceName,
      successUrl,
      cancelUrl,
    } = body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !bookedTime ||
      !price ||
      !serviceName ||
      !successUrl ||
      !cancelUrl
    ) {
      return NextResponse.json({ error: 'Missing required parameters.' }, { status: 400 });
    }

    const ticket = await prismadb.ticket.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        quantity,
        bookedTime: new Date(bookedTime),
        paid: false,
        serviceName,
      },
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: serviceName,
            },
            unit_amount: Number(price) * 100,
          },
          quantity,
        },
      ],
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        ticketId: ticket.id,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: error.message || 'Unknown error' },
      { status: 500 }
    );
  }
}
