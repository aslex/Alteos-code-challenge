const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    age: Number,
    eyeColor: String,
    name: String,
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    company: String,
    email: String,
    phone: String,
    address: String
})
const Data = mongoose.model('Data', userSchema);
module.exports = Data; 