const mongoose = require('mongoose');
const nodeSchema = new mongoose.Schema({
  id: String,
  left: String,
  right: String,
  winner: { type: String },
  matchRef: { type: mongoose.Schema.Types.ObjectId, ref: 'Match' }
}, { _id: false });
const bracketSchema = new mongoose.Schema({
  tournament: { type: mongoose.Schema.Types.ObjectId, ref: 'Tournament', index: true },
  type: String,
  nodes: [nodeSchema],
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Bracket', bracketSchema);
