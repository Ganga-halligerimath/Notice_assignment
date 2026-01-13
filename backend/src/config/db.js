import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();




const connectDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Mongodb connected succesful");
    }catch(err){
        console.error("Mongodb connection failed",err.message);
        process.exit(1);
    }
}

export default connectDB;