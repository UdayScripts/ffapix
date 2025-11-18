const mongoose = require('mongoose');
const notificationSchema = new mongoose.Schema({
  type: { type: String, enum: ['system','tournament','match','payment'] },
  recipient: { type: mongoose.Schema.Types.ObjectId, refPath: 'recipientModel' },
  recipientModel: { type: String, enum: ['Player','Team','AdminUser'] },
  channel: { type: String, enum: ['telegram','inapp','email'], default: 'inapp' },
  payload: mongoose.Schema.Types.Mixed,
  sentAt: Date,
  status: { type: String, enum: ['pending','sent','failed'], default: 'pending' },
}, { timestamps: true });
module.exports = mongoose.model('Notification', notificationSchema);
