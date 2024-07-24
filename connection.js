const mongoose = require('mongoose');

const url = "mongodb+srv://jasimAli:jasim@cluster0.6law0x4.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0";
//name of db is written in between /?

mongoose.connect(url)
.then((result) => {
    console.log('database connected')
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;

//mongoose.connect is an asynchronous functions which means that it will not wait to complete it execution will go on

