const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const { name, price } = req.body;

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card', 'oxxo'],
                line_items: [
                    {
                        price_data: {
                            currency: 'mxn',
                            product_data: {
                                name: name,
                            },
                            unit_amount: Math.round(price * 100), // Convertir a centavos aquí
                        },
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                shipping_address_collection: {
                    allowed_countries: ['MX'], // Lista de países permitidos para la dirección de envío
                },
                shipping_options: [
                    {
                        shipping_rate_data: {
                            type: 'fixed_amount',
                            fixed_amount: {
                                amount: 15000, // Costo de envío en centavos (por ejemplo, 150 MXN)
                                currency: 'mxn',
                            },
                            display_name: 'Envío Estándar',
                            delivery_estimate: {
                                minimum: {
                                    unit: 'business_day',
                                    value: 5,
                                },
                                maximum: {
                                    unit: 'business_day',
                                    value: 7,
                                },
                            },
                        },
                    },
                ],
                phone_number_collection: {
                    enabled: true,
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