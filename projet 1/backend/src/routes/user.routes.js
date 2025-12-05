
const router = require('express').Router();
const { auth, isAdmin } = require('../middleware/auth');
const { createUser, listUsers } = require('../controllers/user.controller');

router.use(auth, isAdmin);

router.post('/', createUser);
router.get('/', listUsers);

module.exports = router;
