const express = require('express');
const router  = express.Router();
const passport = require("../config/passport");
const {signupPost,signupGet}=require('../controllers/authControllers')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
})
.get('/login',(req,res)=>res.render('login'))
.post('/signup',signupPost)
.get('/signup',signupGet)

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/menu",
    failureRedirect: "/login",
    failureFlash: true
  })
);

module.exports = router;
