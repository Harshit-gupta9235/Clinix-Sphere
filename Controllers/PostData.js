import User from '../model/DataSchema.js'
const postdata=async (req,res)=>{
    try{
        // console.log(req.body)
        const user= new User(req.body);
        const data=await user.save();
        res.status(200).json({
            msg:"Store Data Successfully",
            data,
        })
    }catch(error){
        res.status(404).json({
            error:`error in PostData.js ${error}`
        })
    }
}
export default postdata;