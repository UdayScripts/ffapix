const mongoose = require('mongoose');
const couponSchema = new mongoose.Schema({
  code: { type: String, index: true, unique: true },
  description: String,
  discountType: { type: String, enum: ['percentage','fixed'], default: 'fixed' },
  discountValue: Number,
  maxUses: Number,
  usedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
  validFrom: Date,
  validUntil: Date,
  applicableTournament: { type: mongoose.Schema.Types.ObjectId, ref: 'Tournament' },
}, { timestamps: true });
module.exports = mongoose.model('Coupon', couponSchema);
