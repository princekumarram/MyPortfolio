import {app} from "./app.js";
import dotenv from "dotenv";
import {connectDatabase} from "./config/database.js";
import cloudinary from "cloudinary";

dotenv.config({path:"./backend/config/config"});


const port=4000;
connectDatabase();

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  app.listen(port,()=>{
    console.log(`Server is running on  port ${port}`);
  })