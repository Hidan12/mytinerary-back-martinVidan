import User from "../models/User.js";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

export default passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_URI_BACK
        },
        async (accesToken, refreshToken, profile, done) =>{
            try {
                let dataUser = await User.findOne({mail:profile.emails[0].value})
                if (dataUser) {
                    return done(null,dataUser)
                }else{
                    const user = {create:true, profile:profile}
                    return done(null, user)
                }
            } catch (error) {
                return done(error,null)
            }
        }
        
    )
)