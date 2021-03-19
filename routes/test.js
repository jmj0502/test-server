const express = require('express');
const router = express.Router({mergeParams: true});

router.
post("/result", (req, res) => {
   console.log(req.body) 
   return res.json({success: true}).status(200)
})
.get("/test", (req, res) => {
    return res.json('the app is running!').status(200)
})

module.exports = router;