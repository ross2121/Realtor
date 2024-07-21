import express from "express";
// import { Login } from "./controllers/auth";
import connectDB from "./db/connect.js";
import dotenv from"dotenv";
dotenv.config();
const app=express();
const port=5000||process.env.PORT;


const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port,()=>{
            console.log(`Server is running at ${port}`)
        })
    } catch (error) {
        console.log(error);
    }
}
start();