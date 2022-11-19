
const mongoose = require('mongoose')

const connectionString = 
'mongodb+srv://ritesh:Tata%401234@atlascluster.4vyp8ng.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority'

//'mongodb+srv://ritesh:Tata@1234@atlascluster.4vyp8ng.mongodb.net/<DATABASE_NAME>?retryWrites=true&w=majority'

// mongoose
//     .connect(connectionString)
//     .then(() => console.log('connected to DB.......'))
//     .catch((err) => console.log(err))

//alternative approach , to be called from app.js file
// url : is connectionString
const connectDB = (url)=>{
    return mongoose
    .connect(url)
}

module.exports = connectDB