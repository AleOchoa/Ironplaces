const User = require ('../models/user')

exports.logout = (req, res) => {
  req.logout()
  res.redirect('/')
}