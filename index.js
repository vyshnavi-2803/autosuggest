const express=require('express')
const app=express()
const port=3000
app.listen(port,function(){
    console.log("Server is running on port http://localhost:"+port)
})
//web server:
app.use(express.static("frontend"))