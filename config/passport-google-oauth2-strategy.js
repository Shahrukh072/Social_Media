const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');


// tell passport ton use in new Strategy for google login
passport.use(new googleStrategy({
    clientID:   "442812849740-r001co4ffgsi8sd554qhohm0t1ftl1ve.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL:  "http://localhost:8080/users/auth/google/callback"
    
  },
function(accessToken, refreshToken, profile, done){
    // find a user
    User.findOne({email: profile.emails[0].value}).exec (function(err, user){
          if(err){console.log ('error in googleStrategy-passport', err); return; }
            console.log(accessToken, refreshToken);
          console.log(profile);
          if(user){
            return done(null, user);
          }else{
            //if not found , create the user ans set it as req.user
            User.create({
                name: profile.displayName,
                email: profile.emails[0].value,
                password: crypto.randomBytes(20).toString('hex')
            }, function(err, user){
                  if(err){console.log('error in creating user google-Strategy', err); return ; }
                  return done(null, user);
            });
          }
        });
        }
));
        
            module.exports = passport;
