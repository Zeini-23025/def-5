
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'غير مصرح. لا يوجد توكن' });
  }
  const token = header.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    if (!user) return res.status(401).json({ message: 'المستخدم غير موجود' });

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'توكن غير صالح' });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ message: 'صلاحيات المسؤول فقط' });
  }
  next();
};

module.exports = { auth, isAdmin };
