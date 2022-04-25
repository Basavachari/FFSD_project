const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const proposal  = new Schema({
    madeby:{type:String},
    amount:{type:Number},
    discribe:{type:String},
    days:{type:Number}
},{ timestamp: true})

const Proposal = mongoose.model("proposal",proposal);
module.exports = Proposal;