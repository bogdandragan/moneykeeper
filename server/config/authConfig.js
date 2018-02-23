const config = {
    facebookAuth : {
        clientID      : 'your-secret-clientID-here', // your App ID
        clientSecret  : 'your-client-secret-here', // your App Secret
        callbackURL   : 'http://localhost:3001/auth/facebook/callback'
    },
    twitterAuth : {
        consumerKey       : 'your-consumer-key-here',
        consumerSecret    : 'your-client-secret-here',
        callbackURL       : 'http://localhost:3001/auth/twitter/callback'
    },
    googleAuth : {
        clientID      : '499400984127-javbnjhf693o4hqlluqsfg9gisokk97n.apps.googleusercontent.com',
        clientSecret  : '0soa3vodsg9cHCazcGLYItN2',
        callbackURL   : 'http://localhost:3001/auth/google/callback'
    }
};

module.exports = config;