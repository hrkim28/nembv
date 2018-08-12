const router = require('express').Router();
const ctrl = require('./ctrls')

router.post('/', ctrl.add)

module.exports = router