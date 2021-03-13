var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    role: {
        type: Number,
        required: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model("User",userSchema);