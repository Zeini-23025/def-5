
const router = require('express').Router();
const { auth, isAdmin } = require('../middleware/auth');
const { getLeaderboard } = require('../controllers/stats.controller');

router.use(auth, isAdmin);

router.get('/leaderboard', getLeaderboard);

module.exports = router;
