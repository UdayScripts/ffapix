const mongoose = require('mongoose');
const antiCheatSchema = new mongoose.Schema({
  player: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  tournament: { type: mongoose.Schema.Types.ObjectId, ref: 'Tournament' },
  match: { type: mongoose.Schema.Types.ObjectId, ref: 'Match' },
  reason: String,
  severity: { type: String, enum: ['low','medium','high'], default: 'low' },
  evidence: [String],
  reviewed: { type: Boolean, default: false },
  reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'AdminUser' },
}, { timestamps: true });
module.exports = mongoose.model('AntiCheatLog', antiCheatSchema);
