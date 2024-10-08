import express from "express";
import {  Register, Login, googleAuthSignIn, logout, createResetSession ,resetpassword ,verifyotp ,generaotp ,finduserbyemail} from "../controllers/auth";
import {localvariable} from "../middleware/otp.js";
const router=express.Router();
router.post("/signup",Register);
router.post("/signin",Login);
router.post("/logout",logout);
router.post("/logout",logout);
router.post("/google",googleAuthSignIn);
router.get("/findbyemail",finduserbyemail);
router.get("/generateotp",localvariable,generaotp);
router.get("/verifyotp",verifyotp);
router.get("/createresetsession",createResetSession);
router.put("/forgotpassword",resetpassword);
export default router;