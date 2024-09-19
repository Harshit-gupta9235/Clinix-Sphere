import mongoose from "mongoose";
const DataSchema= new mongoose.Schema(
    {
        date:{
            type:String,
            required:true,
        },
        temperature:{
            type:Number,
            required:true,
        },
        systolic:{
            type:Number,
            required:true,
        },
        diastolic:{
            type:Number,
            required:true,
        },
        heart:{
            type:Number,
            required:true,
        }
    }
)
export default mongoose.model("datas",DataSchema)