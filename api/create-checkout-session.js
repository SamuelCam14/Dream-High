const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const { name, price, installments } = req.body;

            // Calcular el precio con el cargo adicional del 7% si pagan a meses
            let finalPrice = price;
            if (installments) {
                finalPrice = price * 1.07; // Añadir 7% al precio original
            }

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card', 'oxxo'],
                line_items: [
                    {
                        price_data: {
                            currency: 'mxn',
                            product_data: {
                                name: name,
                            },
                            unit_amount: Math.round(finalPrice * 100), // Convertir a centavos aquí
                        },
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                payment_method_options: {
                    card: installments ? {
                        installments: {
                            enabled: true,
                            plan: {
                                count: parseInt(installments), // Número de meses
                                interval: 'month',
                                type: 'fixed_count',
                            },
                        },
                    } : undefined,
                },
                success_url: `${req.headers.origin}/success.html?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/cancel.html`,
            });

            res.status(200).json({ id: session.id });
        } catch (err) {
            console.error('Error creating checkout session:', err);
            res.status(500).json({ statusCode: 500, message: err.message });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
};