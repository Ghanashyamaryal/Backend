import 'dotenv/config';
import { DB_Name } from "../constant.js";
import mongoose from 'mongoose';


 const  dbconnect = async ()=> {
    console.log(process.env.DB_URL)
    console.log(DB_Name)
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DB_URL}/${DB_Name}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("database connection failed",error)
    }
}
export default dbconnect;