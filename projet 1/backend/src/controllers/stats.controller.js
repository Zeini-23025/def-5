
const Team = require('../models/Team');

exports.getLeaderboard = async (req, res, next) => {
  try {
    const teams = await Team.find().sort({ totalPoints: -1 });
    res.json(teams);
  } catch (err) {
    next(err);
  }
};
