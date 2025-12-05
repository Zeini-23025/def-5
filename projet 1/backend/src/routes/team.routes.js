
const router = require('express').Router();
const { auth, isAdmin } = require('../middleware/auth');
const {
  createTeam,
  updateTeam,
  deleteTeam,
  addPoints,
  getTeams,
} = require('../controllers/team.controller');

router.use(auth, isAdmin);

router.post('/', createTeam);
router.get('/', getTeams);
router.put('/:id', updateTeam);
router.delete('/:id', deleteTeam);
router.post('/:id/points', addPoints);

module.exports = router;
