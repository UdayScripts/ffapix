const mongoose = require('mongoose');
const matchSchema = new mongoose.Schema({
  tournament: { type: mongoose.Schema.Types.ObjectId, ref: 'Tournament', required: true, index: true },
  round: Number,
  matchNumber: Number,
  bracketId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bracket' },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
  scheduledAt: Date,
  serverInfo: {
    region: String,
    ip: String,
    roomId: String
  },
  status: { type: String, enum: ['scheduled','running','finished','abandoned','disputed'], default: 'scheduled' },
  result: {
    winner: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    scores: [{ team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' }, points: Number }],
    endedAt: Date,
    proof: [{ type: String }]
  },
}, { timestamps: true });
module.exports = mongoose.model('Match', matchSchema);
