<<<<<<< HEAD
const User = require ('../models/user')
=======
const User = require ('../models/User')
>>>>>>> d011348520df1f49fc75f15254a50ea6155b6302

exports.logout = (req, res) => {
  req.logout()
  res.redirect('/')
}