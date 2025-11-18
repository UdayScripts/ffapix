const mongoose = require('mongoose');
const transactionSchema = new mongoose.Schema({
  userType: { type: String, enum: ['player','team','admin'] },
  userRef: { type: mongoose.Schema.Types.ObjectId, refPath: 'userType' },
  amount: { type: Number, required: true },
  currency: { type: String, default: 'INR' },
  type: { type: String, enum: ['deposit','withdraw','entry_fee','prize','refund','payout'] },
  provider: String,
  providerRef: String,
  status: { type: String, enum: ['pending','success','failed','refunded'], default: 'pending' },
  meta: mongoose.Schema.Types.Mixed,
}, { timestamps: true });
module.exports = mongoose.model('Transaction', transactionSchema);
