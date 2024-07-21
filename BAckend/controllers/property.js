import mongoose from "mongoose";
import Property from "../models/property";
import User from "../models/agent";
import {badrequest,notfound,unaunthicated} from "../errors/index";
import { StatusCodes } from "http-status-codes";
export const createproperty=async(req,res)=>{
    const temp=req.body;

    const user=await User.findById(req.user.id);
    if(!temp){
        throw new badrequest("Please provode  all values");
    }
    req.body.Agent=user.id;
    const property=await Property.create(req.body);
    res.status(StatusCodes.CREATED.json({property}));
};
export const updateproperty=async(req,res)=>{
    // const property=await Property.findById(req.Property.id);
    const {id:propertyId}=req.params;
    const property=await Property.findOne({_id:propertyId});
    if(!property){
        throw new notfound("No property found");
    }
    const updateproperty=await Property.findOneAndUpdate({_id:propertyId},req.body,{
        new:true,
        runValidators:true,
    });
    res.status(StatusCodes.OK).json({updateproperty});
};
export const deleteproperty=async(req,res)=>{
     const {id:propertyId}=req.params;
    const property=Property.findById(propertyId);
    if(!property){
        throw new notfound("No propert is found");
    }
    const deleteproperty=await Property.findByIdAndDelete(propertyId);
        req.status(StatusCodes.OK).json({deleteproperty});
    
}
export const random=async(req,res)=>{

        const property=await Property.aggregate([{$sample:{size:40}}]).populate("Agent","name image").populate("property");
        res.status(200).json({property});
    
}
export const filterpricrange=async(req,res)=>{
    
}
export const getallproperty=async(req,res)=>{
    const {bedroom,search,sort,category}=req.query;
    // const user=await User.findById(req.user.id);
    const queryobject={
        Agent:req.user.userId,
    }
    if(bedroom&&bedroom!=="all"){
        queryobject.status=bedroom
    }
    if(category&&category!=="all"){
        queryobject.status=category;
    }
 if(search){
        queryobject.address={$regex:search,$options:'i'};
    }
    let result=Property.find(queryobject);
    if(sort==='latest'){
        result=result.sort('-createdAt');
    }
    if(sort==='oldest'){
        result=result.sort('createdAt');
    }
    if(sort===1-10){
        result=result.sort('bedroom');
    }
    if(sort===10-1){
        result=result.sort('-bedroom');
    }
    if(sort===$200000-Math.max){
        result=result.sort('amount');
    }
    if(sort===Math.max-$200000){
        result=result.sort('-amount')
    }
    const page=Number(req.query.page)||1;
    const limit=Number(req.query.limit)||50;
    const skip=(page-1)*limit;
    result=result.skip(skip).limit(limit);
    const property=await result;
    const totalproperty=await  Property.countDocuments(queryobject);
    const numOfpages=Math.ceil(totalproperty/limit);
    res.status(StatusCodes.OK).json({property,numOfpages,totalproperty});
}