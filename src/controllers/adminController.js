const AdminUser = require('../models/AdminUser');
const Tournament = require('../models/Tournament');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const admin = await AdminUser.findOne({ email });
  if (!admin) return res.status(401).json({ message: 'Invalid' });
  const ok = await bcrypt.compare(password, admin.passwordHash);
  if (!ok) return res.status(401).json({ message: 'Invalid' });
  const token = jwt.sign({ sub: admin._id }, process.env.JWT_SECRET, { expiresIn: '8h' });
  res.json({ token, admin: { id: admin._id, email: admin.email, name: admin.name } });
};

exports.createTournament = async (req, res) => {
  const data = req.body;
  data.createdBy = req.admin._id;
  const t = await Tournament.create(data);
  res.json(t);
};

exports.listTournaments = async (req, res) => {
  const t = await Tournament.find().sort({ createdAt: -1 }).limit(50);
  res.json(t);
};

exports.getTournament = async (req, res) => {
  const t = await Tournament.findById(req.params.id);
  if (!t) return res.status(404).json({ message: 'Not found' });
  res.json(t);
};
