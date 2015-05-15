var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
    name: String, 
    completed: Boolean,
    notes: String,
    updated_at: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Todo', TodoSchema);