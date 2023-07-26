const keys = require('../config/keys');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const db = require('../models');
const User = db.user;

const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: keys.jwt
};

module.exports = passport => {
	passport.use(
		new JwtStrategy(options, (payload, done) => {
			try {
				User.findByPk(payload.userId, {
					attributes: ['email', 'id']
				}).then(data => {
					const user = data;
					if (user) {
						done(null, user);
					} else {
						done(null, false)
					}
				})
			} catch (e) {
				console.log(e);
			}
		})
	)
}