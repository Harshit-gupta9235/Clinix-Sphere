import User from '../model/DataSchema.js'
const getdata= async (req,res) => {
    try{
        const data= await User.find();
        res.status(200).json({
            msg:"fetchdata successfully",
            data,
        })        
    }catch(error){
        res.status(404).json({
            error:`error in GetData.js ${error}`
        })
    }
}
export default getdata;