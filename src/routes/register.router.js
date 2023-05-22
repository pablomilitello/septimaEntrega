import { Router } from 'express';

import {
  currentSession,
  errorLogin,
  errorRegister,
  githubAuthenticate,
  githubSignup,
  login,
  passportLogin,
  passportLogout,
  passportRegister,
  register,
} from '../controllers/users.controller.js';

const router = Router();

router.get('/', register);
router.get('/login', login);
router.get('/errorRegister', errorRegister);
router.get('/errorLogin', errorLogin);

//Passport
router.post('/', passportRegister);
router.post('/login', passportLogin);
router.post('/logout', passportLogout);

//Github
router.get('/signupGithub', githubSignup);
router.get('/github', githubAuthenticate);

router.get('/current', currentSession);

export default router;
