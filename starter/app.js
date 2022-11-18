console.log("hello node js...")

const express = require('express')
const app = express()

//settting up router
app.get('/hello',(req,res)=>{
    res.send('Task manager app')
})

// set port number
const port = 3000
//setting server listen port no
app.listen(port,console.log(`server is listening on port ${port}`))
