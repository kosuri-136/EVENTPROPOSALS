const express=require("express")
const app=express();
const cors = require("cors")
app.use(express.json())
require("./connection/connect.js")
const router=require("./router/route.js")
app.use(router);
app.use(cors({
    origin: "http://localhost:3000",
}));



app.get("/",(req,res)=>{
   res.send("Home").status(200)
})

app.listen(9000,(req,res)=>{
    console.log("server is running on 9000")
})