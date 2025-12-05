
const router = require('express').Router();
const { login } = require('../controllers/auth.Controller');

router.post('/login', login);

module.exports = router;
