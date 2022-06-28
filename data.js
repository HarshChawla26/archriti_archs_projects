const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/archiritiDB',(err)=>{
    if(!err){
        console.log('connection successful')
    }else{
        console.log('Error in connection' + err)
    } 
});

module.exports = mongoose;