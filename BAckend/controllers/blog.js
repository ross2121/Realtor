import mongoose from "mongoose";
import Blog from "../models/blogs";
import Agent from "../models/agent";
import {badrequest,notfound,unaunthicated} from "../errors/index";
import { StatusCodes } from "http-status-codes";

export const createblogs=async(req,res)=>{
  const temp=req.body;
  const user=await Agent.findById(req.user.id);
  if(!temp){
    throw new badrequest("Kindly fill all the fields");
  }
req.body.Agent=user.id;
const blog=await Blog.create(req.body);
res.status(StatusCodes.CREATED.json({blog}));
}
export const updateblog=async(req,res)=>{
    const {id:blogId}=req.params;
    const blog=await Blog.findOne({_id:blogId});
    if(!blog){
     throw new notfound("NO blog is found");   
    }
    const update=await Property.findOneAndUpdate({_id:blogId},req.body,{
        new:true,
        runValidators:true,
    });
    res.status(StatusCodes.CREATED.json({update})); 
}
export const deleteblog=async(req,res)=>{
    const {id:blogId}=req.params;
    const blog =await Blog.findOne({_id:blogId});
    if(!blog){
        throw new notfound("No blog is found");
    }
    const deleteblog=await Blog.findByIdAndDelete({_id:blogId});
    res.status(StatusCodes.OK).json({deleteblog});
}
export const getallblogs=async(req,res)=>{
  const {views,sort,search}=req.query;
const queryobject={Agent:req.user.userId};
if(search){
  queryobject.heading={$regex:search,$options:'i'};
}
let result=Blog.find(queryobject);
if(sort==="latest"){
  result=result.sort('-createdAt');
}
if(sort==="oldest"){
  result=result.sort('cratedAt');
}

}