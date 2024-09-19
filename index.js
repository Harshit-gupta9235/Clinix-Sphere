import express from 'express'
import connectdb from './Config/Database.js'
import route from './routes/Route.js'
import cors from 'cors'
const app=express();
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use("/",route)

const port=8000;
connectdb();
app.listen(port,()=>{
    console.log(`server running successfully ${port}`)
})