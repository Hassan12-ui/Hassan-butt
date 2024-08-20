import mongoose from "mongoose"
import colors from "colors"
import dotenv from "dotenv";
dotenv.config()

const uri=process.env.url

const connectiondb=async()=>{
    try {
        await mongoose.connect(uri)
        console.log("mongoo connected successfully".bgBlue)
    } catch (error) {
        console.log(error)
    }
}
 export default connectiondb