const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secret =
    process.env.JWT_SECRET || 'some string value only your app knows';

const { Strategy, ExtractJwt } = require('passport-jwt');
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret,
};

const Emc2 = require('../models/Profile');
const strategy = new Strategy(opts, function (jwt_payload, done) {
    Emc2.findById(jwt_payload.id)
        .then((emc2) => done(null, emc2))
        .catch((err) => done(err));
});

passport.use(strategy);
passport.initialize();

const requireToken = passport.authenticate('jwt', { session: false });
const createEmc2Token = (req, emc2) => {
    if (
        !Emc2 ||
        !req.body.code ||
        !bcrypt.compareSync(req.body.code, emc2.code)
    ) {
        const err = new Error('The provided username or password is incorrect');
        err.statusCode = 422;
        throw err;
    }
    return jwt.sign({ id: emc2._id }, secret, { expiresIn: 36000 });
};

module.exports = {
    requireToken,
    createEmc2Token,
};