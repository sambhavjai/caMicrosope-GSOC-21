var mongoose = require('mongoose');

var itemSchema = new  mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    roles: {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model("Items",itemSchema);