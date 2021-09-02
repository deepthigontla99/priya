const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CourseSchema = new Schema({
    name: {
        type: String, 
        required: true, 
        max: 100
    },
    amount: {
        type: Number, 
        required: true
    },
});

// Export the model
module.exports = mongoose.model('course', CourseSchema);
