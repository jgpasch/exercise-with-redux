import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const UserSchema = new mongoose.Schema({
  oauthID: { type: Number},
  email: { type: String, lowercase: true, unique: true},
  password: String
});

UserSchema.pre('save', function (next) {
  // save ref to user
  const user = this;

  // create salt
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    // create hash with salt and user password
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err);

    cb(null, isMatch);
  });
};

const User = mongoose.model('User', UserSchema);

export default User;