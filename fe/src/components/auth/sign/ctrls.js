User.findOne()
  .where('id').equals(id)
  .then((r) => {
      if (!r) throw new Error('id not exists')
      if (pwd !== r.pwd) throw new Error('password diff')
      
      const secret = req.app.get('jwt-secret')
      const p = new Promise((resolve, reject) => {
          jwt.sign(
              {
                  _id: r._id,
                  id: r.id,
                  email: r.email
              },
              secret,
              {
                  expireIn: '2m',
                  issuer: cfg.web.host,
                  subject: 'user-token'
              }, (err, token) => {
                  if (err) reject(err)
                  resolve(token)
              }
          )
      })
      return p
  })
  .then((tk) => {
      res.send({ success: true, token: tk})
  })