const mongoose = require('mongoose');
const teamSchema = new mongoose.Schema({
  name: { type: String, required: true, index: true },
  tag: { type: String },
  leader: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
  tournamentIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tournament' }],
  status: { type: String, enum: ['active','suspended','disbanded'], default: 'active' },
  walletBalance: { type: Number, default: 0 },
}, { timestamps: true });
teamSchema.index({ name: 1 }, { unique: true, sparse: true });
module.exports = mongoose.model('Team', teamSchema);
