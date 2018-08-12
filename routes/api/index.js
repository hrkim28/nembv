const router = require('express').Router();
const auth = require('./auth')
const check = require('./check')

router.use('/auth', auth)
router.all('*', check.verify)
router.all('*', (req, res, next) => {
  console.log(req.headers)
  next()
})

// router.use('/test', test);
router.get('/test/hello/plz', (req, res) => {
    res.send({ success: true, msg: '여기까지 오느라 쉬웠지만 index.js가 더러워지겠죠?' })
})

router.all('*', (req, res) => {
  res.status(404).send({ success: false, msg: `unknown uri ${req.path}` })
})
module.exports = router