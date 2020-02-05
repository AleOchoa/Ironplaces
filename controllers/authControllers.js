const User = require ('../models/User')

exports.signupGet = (req, res) => {
  res.render("signup");
};

exports.signupPost = async (req, res) => {
  const { name, email, password } = req.body;

  if (email === "" || password === "") {
    res.render("auth/signup", {
      message: "seas mamon dame tu correo y contraseña"
    });
  }

  const userOnDB = await User.findOne({ email });
  if (userOnDB !== null) {
    res.render("auth/signup", { message: "El correo ya fue registrado" });
  }
  await User.register({ name, email }, password);
  res.redirect("/login");
};

exports.loginGet = (req, res) => {
  res.render("auth/login", { message: req.flash("error") });
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect("/login");
};