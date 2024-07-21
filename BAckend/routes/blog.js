import express from "express";
import {createblogs,updateblog,deleteblog,getallblogs} from "../controllers/blog"
import {authorizeAgent,propertyowner} from "../middleware/auth";;
const router=express.Router();

router.post("/blogs",[authorizeAgent,propertyowner],createblogs);
router.patch("/blogs/:id",[authorizeAgent,propertyowner],updateblog);
router.delete("/blogs/:id",[authorizeAgent,propertyowner],deleteblog);
router.get("/blogs",getallblogs);
export default router;