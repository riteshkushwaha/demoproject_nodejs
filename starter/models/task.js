const mongoose = require('mongoose');

//schema to be same as database table configurable
// const taskScheme = new mongoose.Schema({
//     name:String,
//     completed:Boolean,
// })

//validation added in schema 
// validation apply for name field
const taskScheme = new mongoose.Schema({
    name : {
        type:String,
        required:[true,'must provide name field'],
        trim : true,
        maxlength:[20,'name can not be more than 20 characters'],
    },
    completed:{
        type:Boolean,
        default:false,
    },
})

module.exports = mongoose.model('Task',taskScheme)