const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

router.get('/google/callback', function(req, res, next){
    passport.authenticate('google', function(err, user, info){
        if (err) {
            return next(err);
        }
        if (!user) {
            console.log("No user");
        }
        req.logIn(user, function(err) {
            if (err) {
                return next(err);
            }
            let userObj = {
              "email": req.user.email,
              "name": req.user.name
            };
            res.cookie('user', JSON.stringify(userObj));

            return res.redirect('/profile');
        });

    })(req, res, next);
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.post('/check', function(req, res) {
   if(!req.isAuthenticated()){
        res.status(401);
        return res.send("Not authorized");
   }
    return res.status(200).send(req.user);
});


module.exports = router;