import mongoose from "mongoose";
const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:false
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
        require:[true,"Please provide the passsword"],
        default:""
    },
    googleSignIn:{
        type:Boolean,
        default:false,
    },
    role:{
        type:String,
        default:"customer",
    },
},
   
    {timestamps:true}


);
export default mongoose.model("User",userschema)