const router = require('express').Router();
const sign = require('./sign')
const register = require('./register')

router.use('/sign', sign);
router.use('/register', register)

module.exports = router