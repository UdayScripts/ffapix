const mongoose = require('mongoose');
const registrationSchema = new mongoose.Schema({
  tournament: { type: mongoose.Schema.Types.ObjectId, ref: 'Tournament', required: true, index: true },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
  leader: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
  status: { type: String, enum: ['pending','paid','approved','rejected','cancelled'], default: 'pending' },
  playersSnapshot: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
  payment: { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' },
  registeredAt: { type: Date, default: Date.now }
}, { timestamps: true });
registrationSchema.index({ tournament: 1, team: 1 }, { unique: true });
module.exports = mongoose.model('Registration', registrationSchema);
