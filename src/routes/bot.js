const express = require('express');
const router = express.Router();
// placeholder endpoints for Telegram bot integration
router.post('/webhook', (req,res)=> {
  // handle telegram update or custom webhook
  console.log('bot webhook', req.body?.message?.text);
  res.json({ ok:true });
});

module.exports = router;
