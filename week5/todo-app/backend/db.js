const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mohit:5GEwcf1Sm7PXJFol@cluster0.49ljzdb.mongodb.net/todo-app')
    .then(() => {
        console.log('Connected To DataBase :)')
    })

const todoSchema = new mongoose.Schema({
    title: String, 
    description: String, 
    completed: Boolean
})

module.exports = mongoose.model('Todo', todoSchema);
