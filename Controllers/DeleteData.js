import User from '../model/DataSchema.js'
const DeleteData=async (req,res)=>{
    try{
        const _id=req.params._id;
        // console.log(_id)
        const data=await User.deleteOne({_id})
        res.status(200).json({
            msg:"deleted Successfully",
            data
        })
    }catch(error){
        res.status(404).json({
            error:`error in DeleteData.js ${error}`
        })
    }
}
export default DeleteData;