const getAllTasks = (req,res)=>{
    res.send('display all items routes through controller')
}

const createTask = (req,res)=>{
    res.json(req.body)
}

const updateTask = (req,res)=>{
    res.send('updating task')
}
const getTaskDetails = (req,res)=>{
    res.send('get task details')
}

const deleteTask = (req,res)=>{
    res.send('delete task')
}

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    getTaskDetails,
    deleteTask
}