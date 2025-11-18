const mongoose = require('mongoose');
const tournamentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true, index: true },
  description: String,
  gameMode: { type: String, enum: ['classic','ranked','custom'], default: 'classic' },
  entryFee: { type: Number, default: 0 },
  currency: { type: String, default: 'INR' },
  maxTeams: { type: Number, default: 64 },
  registrationStart: Date,
  registrationEnd: Date,
  startAt: Date,
  endAt: Date,
  prizePool: {
    total: Number,
    breakdown: [{ rank: Number, amount: Number }]
  },
  bracketType: { type: String, enum: ['single_elim','double_elim','round_robin','swiss'], default: 'single_elim' },
  status: { type: String, enum: ['draft','open','running','completed','cancelled'], default: 'draft' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'AdminUser' },
  verificationRequired: { type: Boolean, default: true },
  settings: {
    autoSchedule: { type: Boolean, default: true },
    bracketAutoGenerate: { type: Boolean, default: true },
  }
}, { timestamps: true });
module.exports = mongoose.model('Tournament', tournamentSchema);
