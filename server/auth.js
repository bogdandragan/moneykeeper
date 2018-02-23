const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const config = require('./config/authConfig');

const User = require('./models/user');


// used to serialize the user for the session
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
        clientID: config.googleAuth.clientID,
        clientSecret: config.googleAuth.clientSecret,
        callbackURL: config.googleAuth.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {

        console.log(accessToken);

        User.findOne({ email: profile.emails[0].value}, function (err, user) {
            if (err){
                return done(err);
            }

            if(user){
                return done(null, user);

            }else{
                let newUser = new User();
                newUser.id = profile.id;
                newUser.token = accessToken;
                newUser.name = profile.displayName;
                newUser.email = profile.emails[0].value;

                newUser.save(function(err){
                    if(err){
                        throw err;
                    }
                    return done(null, user);

                })
            }
        });
    }
));
