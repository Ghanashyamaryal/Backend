import 'dotenv/config';
import { DB_Name } from "../constant.js";
import mongoose from 'mongoose';


 const  dbconnect = async ()=> {
    console.log(process.env.DB_URL)
    console.log(DB_Name)
    try {
         await mongoose.connect(`${process.env.DB_URL}/${DB_Name}`)
        console.log("Database connection successfully")
        
    } catch (error) {
        console.log("database connection failed",error)
    }
}
export default dbconnect;