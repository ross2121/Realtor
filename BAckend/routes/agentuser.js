import express from "express";
import { auth } from "../middleware/auth";
import { auth, } from "../middleware/auth";
import {update,authorizeAgent,propertyowner} from "../models/customer";
import {createprofile,updateprofile,getRealtorProfile} from "../controllers/agent"
const router=express.Router();
router.get("/",auth,update);
router.post("/agentprofile",[auth,authorizeAgent,propertyowner],createprofile);
router.patch("/agentprofileupdate",[auth,authorizeAgent,propertyowner],updateprofile);
router.get("Agentprofile",getRealtorProfile);
export default router;
