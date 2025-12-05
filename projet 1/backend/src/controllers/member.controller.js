
const Member = require('../models/Member');
const Team = require('../models/Team');

exports.createMember = async (req, res, next) => {
  try {
    const { name, email, teamId } = req.body;
    const team = await Team.findById(teamId);
    if (!team) return res.status(404).json({ message: 'الفريق غير موجود' });

    const member = await Member.create({ name, email, team: teamId });
    team.members.push(member._id);
    await team.save();

    const io = req.app.get('io');
    const teams = await Team.find().populate('members').sort({ totalPoints: -1 });
    io.emit('teamsUpdated', teams);

    res.status(201).json(member);
  } catch (err) {
    next(err);
  }
};
