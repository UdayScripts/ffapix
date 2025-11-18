const mongoose = require('mongoose');
const reportSchema = new mongoose.Schema({
  tournament: { type: mongoose.Schema.Types.ObjectId, ref: 'Tournament' },
  match: { type: mongoose.Schema.Types.ObjectId, ref: 'Match' },
  reporter: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
  against: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
  description: String,
  evidence: [String],
  status: { type: String, enum: ['open','reviewing','resolved','dismissed'], default: 'open' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'AdminUser' },
  resolution: String,
}, { timestamps: true });
module.exports = mongoose.model('Report', reportSchema);
