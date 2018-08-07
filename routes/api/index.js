const router = require('express').Router();

router.all('*', (req, res, next) => {
  console.log(req.path + ' welcome to api');
  // 미들웨어가 들어갈 곳
  next();
})

// router.use('/test', test);
router.get('/test/hello/plz', (req, res) => {
    res.send({ success: true, msg: '여기까지 오느라 쉬웠지만 index.js가 더러워지겠죠?' });
});

router.all('*', (req, res) => {
  res.status(404).send({ success: false, msg: `unknown uri ${req.path}` });
});
module.exports = router;