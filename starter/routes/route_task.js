const express = require('express')
const router = express.Router();

//importing controller methods
const {
    getAllTasks,
    createTask,
    updateTask,
    getTaskDetails,
    deleteTask
} = require('../controllers/controller_task')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTaskDetails).patch(updateTask).delete(deleteTask)     

module.exports = router