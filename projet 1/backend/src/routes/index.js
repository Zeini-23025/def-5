
const express = require('express');
const router = express.Router();

const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const teamRoutes = require('./team.routes');
const memberRoutes = require('./member.routes');
const statsRoutes = require('./stats.routes');

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/teams', teamRoutes);
router.use('/members', memberRoutes);
router.use('/stats', statsRoutes);

module.exports = router;
