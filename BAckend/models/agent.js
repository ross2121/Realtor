import mongoose from "mongoose";
import bcrypt from "bcrypt";
import customer from "./customer";
import { comments } from "moongose/models";
const agent=new mongoose.Schema({
    name:{
        type:mongoose.Types.ObjectId,
        require:true,
    },
    contactno:{                    
        type:Number,
        require:true
    },
    email:{
        type:String,
        required:[true,"Please provide emailid"],
        match:[  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
          ],
        unique:true
    },
    password:{
        type:String,
        require:[true,"Please provide password"],
        default:"",
    },
    googleSignIn:{
      type:String,
      default:false,
    },
    about:{
        type:String,
        require:true,
    },
    License:{
        type:String,
        require:true
    },
    role:{
        type:String,
        default:"Agent"
    },
    reviews:
        [{
            customer:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"user"
            },
            rating:{
                type:Number,
                min:1,
                max:5,
            },
            comments:{
                type:String,
            },
        }],
        listings:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"property"
        }
        
    },
    {timestamps:true}
)
export default mongoose.model("agent",agent);
