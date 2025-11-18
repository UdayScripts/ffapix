const jwt = require('jsonwebtoken');
const AdminUser = require('../models/AdminUser');

exports.verifyToken = async (req, res, next) => {
  try {
    const header = req.headers['authorization'];
    if (!header) return res.status(401).json({ message: 'No token' });
    const token = header.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await AdminUser.findById(payload.sub);
    if (!admin) return res.status(401).json({ message: 'Invalid token' });
    req.admin = admin;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};
