import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import employeeRouter from './routes/employeeRoutes'


dotenv.config()

const app = express()

app.use(cors())

app.use(bodyParser.json())

const connectionString = process.env.MONGO_URL;

mongoose.connect(connectionString).then(     //use mogoose to connect db.
    ()=>{
        console.log("Connected to the databse")
    }
).catch(
    ()=>(
        console.log("Connection failed")
    )
)

app.use("/api/employees",employeeRouter) 
                              


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});