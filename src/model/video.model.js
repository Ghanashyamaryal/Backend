
import mongoose ,{Schema} from "mongoose";

const VideoSchema = new Schema(
    {
       videOfILE:{
        type:string,
        required :true,
       },
       thumbnail:{
        type:string,
        required :true,
       },
       Owner:{
        type:Schema.Types.ObjectId,
            ref:"User"
       },
       title:{
        type:string,
        required :true,
       },
       description:{
        type:string,
        required:true
       },
       duration:{
           type:number,
           required:true
        },
        views:{
            type:number,
            default:0
         },
       ispublished:{
        type:Boolean
       }
    },
{timestamps:true})

VideoSchema.plugin(mongooseAggregatePaginate);
export const Video = mongoose.model("Video",VideoSchema)