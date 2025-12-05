
const Team = require('../models/Team');

exports.createTeam = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const team = await Team.create({ name, description });
    res.status(201).json(team);
  } catch (err) {
    next(err);
  }
};

exports.updateTeam = async (req, res, next) => {
  try {
    const team = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!team) return res.status(404).json({ message: 'الفريق غير موجود' });
    res.json(team);
  } catch (err) {
    next(err);
  }
};

exports.deleteTeam = async (req, res, next) => {
  try {
    const team = await Team.findByIdAndDelete(req.params.id);
    if (!team) return res.status(404).json({ message: 'الفريق غير موجود' });
    res.json({ message: 'تم حذف الفريق' });
  } catch (err) {
    next(err);
  }
};

exports.addPoints = async (req, res, next) => {
  try {
    const { points } = req.body;
    const team = await Team.findById(req.params.id);
    if (!team) return res.status(404).json({ message: 'الفريق غير موجود' });

    team.totalPoints += Number(points || 0);
    await team.save();

    // إرسال تحديث Real-time
    const io = req.app.get('io');
    const teams = await Team.find().sort({ totalPoints: -1 });
    io.emit('teamsUpdated', teams);

    res.json(team);
  } catch (err) {
    next(err);
  }
};

exports.getTeams = async (req, res, next) => {
  try {
    const teams = await Team.find().populate('members').sort({ totalPoints: -1 });
    res.json(teams);
  } catch (err) {
    next(err);
  }
};
