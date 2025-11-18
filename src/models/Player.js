const mongoose = require('mongoose');
const playerSchema = new mongoose.Schema({
  telegramId: { type: String, index: true },
  telegramUsername: String,
  gameId: { type: String, required: true },
  name: String,
  phone: String,
  email: String,
  country: String,
  avatarUrl: String,
  stats: {
    matchesPlayed: { type: Number, default: 0 },
    wins: { type: Number, default: 0 },
    elo: { type: Number, default: 1200 }
  },
  banned: { type: Boolean, default: false },
  banReason: String,
}, { timestamps: true });
module.exports = mongoose.model('Player', playerSchema);
