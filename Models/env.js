const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var reg = new Schema({
    name:({
        type:String
    })
})

const MyModel = mongoose.model('secure', reg);
module.exports = MyModel
