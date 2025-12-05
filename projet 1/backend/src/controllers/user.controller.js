
const User = require('../models/User');

exports.createUser = async (req, res, next) => {
  try {
    const { name, email, password, role = 'member' } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'البريد مستخدم مسبقاً' });

    const user = await User.create({ name, email, password, role });
    res.status(201).json({ message: 'تم إنشاء المستخدم', user: { id: user._id, name, email, role } });
  } catch (err) {
    next(err);
  }
};

exports.listUsers = async (req, res, next) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    next(err);
  }
};
