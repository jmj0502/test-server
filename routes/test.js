const express = require('express');
const router = express.Router({mergeParams: true});

router.
post("/result", (req, res) => {
   console.log(req.body) 
   return res.json({success: true}).status(200)
})
.post("/transactions", (req, res) => {
    const response = {
        merchant_identify: {
            integratorId: "1",
            merchantId: "150332",
            terminalId: "1"
        },
        transaction_list: [
            {
                trx_date: "2021-03-30",
                trx_type: "compra",
                authorization_code: "002166",
                payment_reference: "0057718281656",
                invoice_number: "3564544",
                payment_method: "c2p",
                origin_mobile_number: "0RPdh6FxGFFcio2P8uxNxg==",
                destination_mobile_number: "Hii5FFH00E9bpVHpvQA0HA==",
                destination_id: "AcTQ7V1gfkkhWIk0bT+Y+w==",
                currency: "ves",
                amount: 2525.33,
                destination_bank_id: "0105"
            },
            {
                trx_date: "2021-03-30",
                trx_type: "compra",
                authorization_code: "002166",
                payment_reference: "0057718281656",
                invoice_number: "3564544",
                payment_method: "c2p",
                origin_mobile_number: "0RPdh6FxGFFcio2P8uxNxg==",
                destination_mobile_number: "Hii5FFH00E9bpVHpvQA0HA==",
                destination_id: "AcTQ7V1gfkkhWIk0bT+Y+w==",
                currency: "ves",
                amount: 2525.33,
                destination_bank_id: "0105"
            }
        ]
    } 
    return res.status(200).json(response);
})
.get("/test", (req, res) => {
    return res.json('the app is running!').status(200)
})

module.exports = router;