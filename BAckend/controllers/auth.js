import mongoose from "mongoose";
import User from "../models/customer";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import otp from "otp-generator"
import nodemailer from "nodemailer"
import {badrequest,unaunthicated} from "../errors/index"
import dotenv from "dotenv";
// import { retry } from "@reduxjs/toolkit/query";
// import { use } from "moongose/routes";
dotenv.config();
export const tranporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL_USERNAME,
        pass:process.env.EMAIL_PASSWORD
    },
    port:465,
    host:'smtp.gmail.com'
})
 export const Register=async (req,res,next)=>{
     const {email,password,name}=req.body
     if(!email||!password||!name){
        throw new badrequest("Please provide name, email and password")
     }
    try{
        const existinguser=User.findOne({email}).exec();
        if(existinguser){
           return res.status(409).send({
            message:"Email is alredy in Use"
           })
        }
        // const user=User.create(...req.body);
        const salt=bcrypt.genSaltSync(10);
        const hashedpassword=bcrypt.hashSync(password,salt);
        const newuser=new User({...req.body,password:hashedpassword})
        newuser.save().then((user)=>{
            const token=jwt.sign({id:user._id},process.env.JWT,{expiresIn:"1 years"});
            res.status(200).json({token,user});
        }).catch((err)=>{
            next(err);
        });
    }catch(err){
        next(err);
    }


}
export const Login=async(req,res,next)=>{
    const {name,password,email}=req.body
    if(!name||!password||!email){
        throw new badrequest("Please provide name,email and password")
    }
    try{
        const user=await User.findOne({email})
        if(!user){
            throw new badrequest("User not found").Status(201);
        }
        if(user.googleSignIn){
            throw new badrequest("Entered email is signed up with google kindly signup with google").status(201);
    
        }
        const validpassword= bcrypt.compareSync(password,user.password);
        if(!validpassword){
            throw new badrequest("Wrong password").status(201);
        }
        const token=jwt.sign({id:user._id},process.env.JWT,{expiresIn:"1 years"});
        res.status(200).json({token,user})
    }
catch(err){
    next(err);
}
}
export const googleAuthSignIn=async(req,res,next)=>{
    const {email,password,name}=req.body
    try {
        const user=await User.findOne({email})
        if(!user){
            try {
                const user=new User({...req.body,googleSignIn:true});
                await user.save();
                const token=jwt.sign({id:user._id},process.env.JWT,{expiresIn:"1 years"})
                res.status(200).json({token,user:user});
            } catch (error) {
                next(error)
            }}
            else if(user.googleSignIn){
                const token=jwt.sign({id:user._id},process.env.JWT,{expiresIn:"1 year"})
                res.status(200).json({token,user})
            }else if(!user.googleSignIn){
                throw new badrequest("User alredy register with this email cant do google auth")
            }
                     
    } catch (error) {
        next(error)
    }
}
export const logout=(req,res)=>{
    res.clearCookie("acess_token").json({message:"Logged out"})
}
export const generaotp=async(req,res)=>{
req.app.locals.OTP=await otp.generate(6,{upperCaseAlphabets:false,specialChars:false,lowerCaseAlphabets:false,digits:true});
const{email,name,reason}=req.query
const verifyotp={
    to:email,
    subject:'Account verification OTP',
    html:` <div style="font-family: Poppins, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px; border: 1px solid #ccc; border-radius: 5px;">
    <h1 style="font-size: 22px; font-weight: 500; color: #854CE6; text-align: center; margin-bottom: 30px;">Verify Your PODSTREAM Account</h1>
    <div style="background-color: #FFF; border: 1px solid #e5e5e5; border-radius: 5px; box-shadow: 0px 3px 6px rgba(0,0,0,0.05);">
        <div style="background-color: #854CE6; border-top-left-radius: 5px; border-top-right-radius: 5px; padding: 20px 0;">
            <h2 style="font-size: 28px; font-weight: 500; color: #FFF; text-align: center; margin-bottom: 10px;">Verification Code</h2>
            <h1 style="font-size: 32px; font-weight: 500; color: #FFF; text-align: center; margin-bottom: 20px;">${req.app.locals.OTP}</h1>
        </div>
        <div style="padding: 30px;">
            <p style="font-size: 14px; color: #666; margin-bottom: 20px;">Dear ${name},</p>
            <p style="font-size: 14px; color: #666; margin-bottom: 20px;">Thank you for creating a REALTOR  account. To activate your account, please enter the following verification code:</p>
            <p style="font-size: 20px; font-weight: 500; color: #666; text-align: center; margin-bottom: 30px; color: #854CE6;">${req.app.locals.OTP}</p>
            <p style="font-size: 12px; color: #666; margin-bottom: 20px;">Please enter this code in the Realtor app to activate your account.</p>
            <p style="font-size: 12px; color: #666; margin-bottom: 20px;">If you did not create a Realtor account, please disregard this email.</p>
        </div>
    </div>
    <br>
    <p style="font-size: 16px; color: #666; margin-bottom: 20px; text-align: center;">Best regards,<br>The Realtor Team</p>
</div>`
};
const resetpasswordotp={
    to:email,
    subject:"Realtor Reset password verification",
    html:`<div style="font-family: Poppins, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px; border: 1px solid #ccc; border-radius: 5px;">
                <h1 style="font-size: 22px; font-weight: 500; color: #854CE6; text-align: center; margin-bottom: 30px;">Reset Your Realtor Account Password</h1>
                <div style="background-color: #FFF; border: 1px solid #e5e5e5; border-radius: 5px; box-shadow: 0px 3px 6px rgba(0,0,0,0.05);">
                    <div style="background-color: #854CE6; border-top-left-radius: 5px; border-top-right-radius: 5px; padding: 20px 0;">
                        <h2 style="font-size: 28px; font-weight: 500; color: #FFF; text-align: center; margin-bottom: 10px;">Verification Code</h2>
                        <h1 style="font-size: 32px; font-weight: 500; color: #FFF; text-align: center; margin-bottom: 20px;">${req.app.locals.OTP}</h1>
                    </div>
                    <div style="padding: 30px;">
                        <p style="font-size: 14px; color: #666; margin-bottom: 20px;">Dear ${name},</p>
                        <p style="font-size: 14px; color: #666; margin-bottom: 20px;">To reset your Realtor account password, please enter the following verification code:</p>
                        <p style="font-size: 20px; font-weight: 500; color: #666; text-align: center; margin-bottom: 30px; color: #854CE6;">${req.app.locals.OTP}</p>
                        <p style="font-size: 12px; color: #666; margin-bottom: 20px;">Please enter this code in the Realtor app to reset your password.</p>
                        <p style="font-size: 12px; color: #666; margin-bottom: 20px;">If you did not request a password reset, please disregard this email.</p>
                    </div>
                </div>
                <br>
                <p style="font-size: 16px; color: #666; margin-bottom: 20px; text-align: center;">Best regards,<br>The PODSTREAM Team</p>
            </div>`
};
if(reason=="FORGOTPASSWORD"){
    tranporter.sendMail(resetpasswordotp,(err)=>{
        if(err){
            next(err)
        }else{
            return res.status(200).send({message:"OTP sent"});

        }
    })
}else{
    tranporter.sendMail(verifyotp,(err)=>{
        if(err){
            next(err)
        }
        else{
            return res.status(200).send({message:"OTP Sent"});
        }
    })
}
}
export const verifyotp=async(req,res,next)=>{
    const {code}=req.query
    if(parseInt(code)===parseInt(req.app.locals.OTP)){
        req.app.locals.OTP=null;
        req.app.locals.resetSession=true;
        res.status(200).send({message:"OTP verified"});
    
    }
   throw new badrequest(201,"Wrong OtP");

}
export const createResetSession=async(req,res,next)=>{
    if(req.app.locals.resetSession){
        req.app.locals.resetSession=false
        return res.status(200).send({message:"Access granted"})
    }
    return res.status(400).send({message:"Session expired"})
}
export const finduserbyemail=async(req,res,next)=>{
    const {email}=req.query;
    try {
        const user=await User.findOne({email:email});
        if(user){
            return res.status(200).send({
                message:"User found"
            })
        }
        else{
            return res.status(202).send({
                message:"User not found"
            })
        }
    } catch (error) {
        next(error);
    }
}
export const resetpassword=async(req,res,next)=>{
    if(!req.app.locals.resetSession){
        return res.status(440).send({message:"Session end"});
    
    }
    const {email,password}=req.body;
    try {
        await User.findOne({email}).then(user=>{
            if(user){
                const salt=bcrypt.genSaltSync(10);
                const hashedpassword=bcrypt.hashSync(password,salt);
                User.updateOne({email:email},{$set:{password:hashedpassword}})
                req.app.locals.resetSession=false;
                return res.status(200).send({
                    message:"Password reset sucessfull"
                }).catch(err=>{
                    next(err);
                })
            }
            else{
                return res.status(202).send({
                    message:"User not found"
                })
            }
        })
    } catch (error) {
        next(error)
    }
}