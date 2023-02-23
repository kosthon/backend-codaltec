const passport = require('passport');

const LocalStrategy = require('./stratgies/local.strategy');
const JwtStrategy = require('./stratgies/jwt.strategy');

passport.use(LocalStrategy);
passport.use(JwtStrategy);
