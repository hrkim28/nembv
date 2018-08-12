const router = require('express').Router();
const ctrl = require('./ctrls')

router.post('/in', ctrl.in)
router.post('/out', ctrl.out)

module.exports = router