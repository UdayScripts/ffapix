const mongoose = require('mongoose');
const auditSchema = new mongoose.Schema({
  actor: { type: mongoose.Schema.Types.ObjectId, ref: 'AdminUser' },
  action: String,
  targetCollection: String,
  targetId: String,
  diff: mongoose.Schema.Types.Mixed,
  ip: String,
  userAgent: String,
}, { timestamps: true });
module.exports = mongoose.model('AuditLog', auditSchema);
