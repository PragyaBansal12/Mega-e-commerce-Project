/*
1. Module Imports
express:
A popular Node.js web application framework used to build RESTful APIs. It simplifies server creation and routing.
cors:
Stands for Cross-Origin Resource Sharing. It's a middleware that allows your frontend (e.g., running on a different domain/port) to make requests to your backend.
'dotenv/config':
Automatically loads environment variables from a .env file into process.env. This allows you to securely store API keys, DB connection strings, or custom settings outside of your code.
*/
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

// App Config

const app = express()
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary()

//middlewares

app.use(express.json())
app.use(cors())           //using this now frontend can access the backend server

//API endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)

app.get('/',(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>console.log("server started on PORT: "+port))