import User from '../model/DataSchema.js'
const getonedata=async (req,res)=>{
    try{
        const _id=req.body;
        console.log(_id)
        const data=await User.findOne({_id})
        res.status(200).json({
            msg:"fetch single data successfully",
            data,
        })
    }catch(error){
        res.status(404).json({
            error:`error in GetOneData.js ${error}`
        })
    }
}
export default getonedata;