import { Router } from "express";
import {sigIn, sigInGoogle} from "../controllers/authentication/signIn.js";
import signOut from "../controllers/authentication/signOut.js";
import validator from "../middlewares/validator.js"
import schemaLoadin from "../schema/authenticator/logIn.js"
import emailVerification from "../middlewares/emailVerification.js";
import passwordVerification from "../middlewares/passwordVerification.js";
import generateToken from "../middlewares/generateToken.js";
import passport from "../middlewares/passport.js";
import passportGoogle from "../middlewares/passportGoogle.js";
import { verifyToken } from "../controllers/user/read.js";
const router = Router()

router.post("/signIn", validator(schemaLoadin), emailVerification, passwordVerification, generateToken, sigIn)

router.get("/signin/google", passportGoogle.authenticate('google',{scope: ["profile", "email"], session:false}))

router.get("/signin/google/callback", passportGoogle.authenticate('google',{session:false, failureRedirect:"/"}), generateToken, sigInGoogle)


router.get("/checkToken", passport.authenticate('jwt',{session:false}), verifyToken)


router.get("/signOut", passport.authenticate('jwt',{session:false}), signOut)

export default router