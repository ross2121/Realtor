import mongoose from "mongoose";
const blog=new mongoose.Schema({
      heading:{ 
        type:String,
        require:true
      },
      image:{
        type:String,
        require:true
      },
      about:{
        type:String,
        require:true
      },
      agent:{
        type:mongoose.Schema.Types.ObjectId,
        default:[],
      },
      views:{
        type:Number,
         default:0,
      }

},
{
    timestamps:true,
}
)
export default mongoose.model("Blogs",blog);