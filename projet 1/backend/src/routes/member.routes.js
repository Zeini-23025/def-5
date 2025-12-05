
const router = require('express').Router();
const { auth, isAdmin } = require('../middleware/auth');
const { createMember } = require('../controllers/member.controller');

router.use(auth, isAdmin);

router.post('/', createMember);

module.exports = router;
