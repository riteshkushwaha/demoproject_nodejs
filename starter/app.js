console.log("starting node js...")

// set port number
const port = 3000
const express = require('express')
const app = express()
const routes = require('./routes/route_task')

//for calling connectDB function which call mongoose method
const connectDB = require('./db/connect')

//middleware for sending data as json
app.use(express.json())

//settting up router
app.get('/hello',(req,res)=>{
    res.send('Task manager app')
})

//using routes for api 
app.use('/api/v1/tasks',routes)


//routes request list below: 
// app.get('/api/v1/tasks') - to get all task list
// app.post('/api/v1/tasks') - to create new task 
// app.get('/api/v1/tasks/:id') - get single task details
// app.patch('/api/v1/tasks/:id') - update task data
// app.delete('/api/v1/tasks/:id') - delete task 


//putting async method , which check DB connection first ; if DB connected successful
// then after server start i.e. app.listen called
const start = async()=>{
    try{
        await connectDB()
        app.listen(port,console.log(`server is listening on port ${port}`))
    }catch(error){
        console.log(error)
    }
}
start()

//setting server listen port no
//app.listen(port,console.log(`server is listening on port ${port}`))
