import mongoose from "mongoose";
const property=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        require:true,
    },
    thumbnail:{
        type:true,
        default:""
    },
    Agent:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    address:{
        type:String,
        require:true,
    
    },
    category:{
      type:String,
      default:"BUY"
    },
    amount:{
        type:Number,
        require:true,
        default:0,
    },
    EMI:{
        type:Number,
        required:true,
        default:0,
    },
    About:{
      type:String,
      require:true
    },
    LocalInformation:{
    type:String,
      require:true,
    },
    area:{
        type:Number,
        require:true,
    },
    bedroom:{
        type:Number,
        require:true
    },
    
},
{
    timestamps:true,
})
export default mongoose.model("property",property);