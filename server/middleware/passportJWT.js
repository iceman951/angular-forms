const passport = require("passport");

let users = [
  { id: "ice", password: "123" },
  { id: "iceice", password: "123456" },
];

const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "my_secret_naja_so_hard_secret_mag_mag";

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = users.find((x) => x.id === jwt_payload.id);
      if (!user) {
        return done(new Error("ไม่พบผู้ใช้ในระบบ"), null);
      }

      return done(null, user);
    } catch (error) {
      done(error);
    }
  })
);

module.exports.isLogin = passport.authenticate("jwt", { session: false });
