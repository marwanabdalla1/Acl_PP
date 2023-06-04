const stripe = require('stripe')(process.env.STRIPE_PRIVATEKEY);
const express = require('express');




const paymentController = {
   
    payforCourse: async (req, res) => {

        const storeItems = new Map([
            [1, { priceInCents: 10000, name: "Learn React Today" }],
            [2, { priceInCents: 20000, name: "Learn CSS Today" }],
          ])


          try {
            const session = await stripe.checkout.sessions.create({ 
              payment_method_types: ["card"],
              mode: "payment",
              line_items: req.body.items.map(item => {
                const storeItem = storeItems.get(item.id)
                return {
                  price_data: {
                    currency: "usd",
                    product_data: {
                      name: storeItem.name,
                    },
                    unit_amount: storeItem.priceInCents,
                  },
                }
              }),
              success_url: `${process.env.CLIENT_URL}/home`,
              cancel_url: `${process.env.CLIENT_URL}`,
            })
            res.json({ url: session.url })
          } catch (e) {
            res.status(500).json({ error: e.message })
          }
      }
}


module.exports = paymentController