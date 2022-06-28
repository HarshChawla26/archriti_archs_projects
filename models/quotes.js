const mongoose = require('mongoose');

const quotesdb = mongoose.model('quotes',{
    qRef : { type: Number },
    content : {type:String},
    author : {type:String}
});

module.exports = quotesdb;