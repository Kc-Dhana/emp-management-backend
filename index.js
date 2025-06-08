import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
//import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import cors from 'cors'


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

//app.use("/api/users",usersRouter)           //userRouter.js eke routes tika use karanwa "/users" dala.use api for best paratice,req eketh(postman)add weenna one api kiyala
                              


app.listen(5000,(req,res)=>{
 console.log("Sever is running on port 5000")
});