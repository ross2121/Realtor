import jwt from "jsonwebtoken";
import Agent from "../models/agent";
import {unaunthicated,notfound} from "../errors/index";
import Property from "../models/property";
export const auth=async(req,res,next)=>{
   try {
    if(!req.headers.authorization) {
        throw new unaunthicated("Authantication error");
    }
    const token=req.headers.authorization.split(" ")[1];
    if(!token){
        throw new unaunthicated("Authoriazation error");
    }
    const decode=await jwt.verify(token,process.env.JWT);
    req.user=decode;
    next();
   } catch (error) {
    console.log(error);
    res.status(402).json({error:error.message});
   }
}
export const authorizeAgent=(req,res,next)=>{
    if(req.user.role!=="agent"){
        throw new unaunthicated("Acess denied");
        
    }
    next();

}
export const propertyowner=async(req,res,next)=>{
    const property=await Property.findById(req.params.id);
    if(!property){
throw new notfound("Property not found");
    }
    if(property.Agent.toString()!==req.user.id){
        throw new unaunthicated("Access denied");
    }
    next();
}