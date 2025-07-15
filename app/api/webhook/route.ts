import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';
import { mailUser } from '@/utils/mail/sendMail';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-06-30.basil',
  typescript: true,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  const buf = Buffer.from(await req.arrayBuffer());
  const sig = req.headers.get('stripe-signature');

  if (!sig) {
    return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      buf.toString(),
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error('⚠️  Webhook signature verification failed.', err.message);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const ticketId = session.metadata?.ticketId;

    if (ticketId) {
      try {
        const updatedTicket = await prismadb.ticket.update({
          where: { id: ticketId },
          data: { paid: true },
        });

        console.log(`ticket ${ticketId} marked as paid.`);

        // Prepare and send confirmation email
        const email = updatedTicket.email;
        const fullName = `${updatedTicket.firstName} ${updatedTicket.lastName}`;
        const subject = `Your ${updatedTicket.serviceName} booking is confirmed!`;
        const message = `
          <h2>Thank you, ${fullName}!</h2>
          <p>Your booking for <strong>${updatedTicket.quantity}</strong> ${updatedTicket.serviceName} session(s) has been confirmed.</p>
          <p><strong>Date:</strong> ${new Date(updatedTicket.bookedTime).toLocaleString()}</p>
          <p>We look forward to seeing you!</p>
        `;

        await mailUser(email, subject, message);
        // console.log('Confirmation email sent to', email);
      } catch (err) {
        console.error(`Failed to update ticket or send email`, err);
        return NextResponse.json({ error: 'Database or mail error' }, { status: 500 });
      }
    }
  }

  return NextResponse.json({ received: true });
}