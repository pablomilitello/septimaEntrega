import passport from 'passport';

export const register = (req, res) => {
  res.render('register');
};

export const login = (req, res) => {
  res.render('login');
};

export const errorRegister = (req, res) => {
  res.render('errorRegister');
};

export const errorLogin = (req, res) => {
  res.render('errorLogin');
};

//Passport
export const passportRegister = (req, res, next) => {
  passport.authenticate('register', { failureRedirect: '/register/errorRegister' });
  next(res.redirect('/register/login'));
};

export const passportLogin = (req, res, next) => {
  passport.authenticate('login', { failureRedirect: '/register/errorLogin' });
  next(res.redirect(`/views/realtimeproducts`));
};

export const passportLogout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/register/login');
  });
};

//Github
export const githubSignup = passport.authenticate('github', {
  scope: ['user:email'],
  failureRedirect: '/register/errorRegister',
});

export const githubAuthenticate = (req, res, next) => {
  passport.authenticate('github', { failureRedirect: '/register/errorLogin' });
  next(res.redirect('/views/realtimeproducts'));
};

export const currentSession = (req, res) => {
  if (!req.user) {
    res.status(400).json('Session expired');
    return;
  }
  const user = { ...req.user._doc };
  delete user.password;
  res.json(user);
};
