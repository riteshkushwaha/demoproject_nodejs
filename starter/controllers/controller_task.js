const Task = require('../models/task')

//sample getAllTask
// const getAllTasks = (req,res)=>{
//     res.send('display all items routes through controller')
// }
// query for fetching all data list
const getAllTasks = async (req,res)=>{
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    }catch(error){
        res.status(500).json({msg:error})
    }
}

// const createTask = (req,res)=>{
//     res.json(req.body)
// }
//using mongoos database
const createTask = async (req,res)=>{
    try{
        const task = await Task.create(req.body)
        res.status(200).json({task})
    }catch(error){
        res.status(500).json({msg:error})
    }
}

//sample task
// const updateTask = (req,res)=>{
//     res.send('updating task')
// }

// connect with database
const updateTask = async(req,res)=>{
    try{
        const{id:taskID} = req.params
        
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new : true,
            runValidators:true
        })

        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        res.status(200).json({_id:taskID, data: req.body})
    }catch(error){
        res.status(500).json({msg:error})
    }
}

//get single task
const getTaskDetails = async (req,res)=>{
    try{
        const {id:taskID} = req.params
        const tasks = await Task.findOne({_id:taskID})
        if(!tasks){
            return res.status(404).json({msg:`No task with id " ${taskID}`})
        }
        res.status(200).json({tasks})
    }catch(error){
        res.status(500).json({msg:error})
    }
    //res.send('get task details')
}

//sample delete task
// const deleteTask = (req,res)=>{
//     res.send('delete task')
// }

const deleteTask = async (req,res)=>{
    try{

    const {id:taskID} = req.params
    const task = await Task.findOneAndDelete({_id:taskID})
    
    if(!task){
        return res.status(404).json({msg:`No Task with ID : ${taskID}`})
    }
    //sending data back after delete
    //res.status(200).json({task})
    //or we can send only status
    //res.status(200).send()
    //or we can send generic message after delete
    res.status(200).json({task:null,status:'success'})
    }catch(error){
        res.status(500).json({msg:error})
    }
    //res.send('delete task')
}

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    getTaskDetails,
    deleteTask
}