const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, price, quantity } = req.body;

        try {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: [
                    {
                        price_data: {
                            currency: 'mxn',
                            product_data: {
                                name: name,
                            },
                            unit_amount: price, // el precio en centavos
                        },
                        quantity: quantity,
                    },
                ],
                mode: 'payment',
                success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/cancel`,
            });

            // Enviar el ID de la sesión al frontend
            res.status(200).json({ id: session.id });
        } catch (err) {
            res.status(500).json({ error: 'Error creating checkout session' });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
