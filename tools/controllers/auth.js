import User from '../models/User';
import config from '../../src/config/config';
import jwt from 'jwt-simple';

export function signUpCtrl(req, res, next) {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({error: 'must provide password'});
  }

  User.findOne({email: email}, (err, existingUser) => {
    if (err) return next(err);

    if (existingUser) {
      return res.status(422).send({error: 'email already in use'});
    }

    // create new User
    const user = new User({
      email: email,
      password: password
    });

    user.save( err => {
      if (err) return next(err);

      res.json({ token: tokenForUser(user)});
    });
  });
}

export function signInCtrl(req, res, next) {
  // at this point, user is already verified
  console.log('user login successsful');
  res.send({token: tokenForUser(req.user)});
}

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({sub: user.id, iat: timestamp}, config.secret);
}


