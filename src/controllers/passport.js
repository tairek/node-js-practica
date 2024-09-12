const passport = require('passport');
const { Strategy } = require('passport-discord');

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser(async (obj, done) => {
    done(null, obj);
});

passport.use(new Strategy({
    clientID: '1278892426546643026',
    clientSecret: 'twO6p0DX52pGetho_zd0ZuYlXbOqdU19',
    callbackURL: 'http://localhost:3000/login',
    scope: ['identify','guilds']
}, (accessToken, refreshToken, profile, cb) => {
    process.nextTick(()=>{
        return cb(null, profile);
    });
}));

module.exports = passport;