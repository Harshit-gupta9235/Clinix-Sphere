import mongoose from "mongoose";
import dontenv from 'dotenv'
dontenv.config();
const url=`${process.env.DB_URL}`
const connectdb = async () =>{
    try {
        await mongoose.connect(`${url}`);
        console.log("database connected successfully")
    } catch (error) {
        console.log(`error in database.js ${error}`)
    }    
}
export default connectdb;