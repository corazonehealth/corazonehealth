import Stripe from 'stripe';
import type { NextApiRequest, NextApiResponse } from 'next';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {

});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { packageTitle, packagePrice } = req.body;

  try {
    // Convert packagePrice to integer cents
    const priceInCents = Math.round(parseFloat(packagePrice) * 100);

    if (isNaN(priceInCents)) {
      throw new Error('Invalid package price');
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'cad', // Ensure CAD is the currency
            product_data: {
              name: packageTitle || 'Default Package Name', // Fallback if packageTitle is not provided
            },
            unit_amount: priceInCents, // Ensure this is passed as integer cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/cancel`,
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Submission error: ', error.message);
      res.status(500).json({ error: error.message });
    } else {
      console.error('Unknown error: ', error);
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
}
