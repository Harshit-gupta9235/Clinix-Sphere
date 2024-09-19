import User from '../model/DataSchema.js'
const UpdateData=async (req,res)=>{
    try{
        const user=req.body.user;
        const _id=req.body._id;
        const data=await User.updateOne({_id},user);
        res.status(200).json({
            msg:"updated Successfully",
            data,
        })
    }catch(error){
        res.status(404).json({
            error:`error in UpdateData.js ${error}`
        })
    }
}
export default UpdateData;