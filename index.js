//importing express
const express = require('express');
const UserRouter = require('./routers/UserRouter');
const UserProduct = require('./routers/ProductRouter')

//initializing express
const app = express();

const port = 5000;
//middleware

app.use(express.json());
app.use('/user',UserRouter)
app.use('/product',UserProduct);


app.get('/',(req,res)=>{
    res.send('response from express')
})

app.get('/add',(req,res)=>{
    res.send('response from add');
});
app.get('/getall',(req,res) => {
    res.send('response from getall');
})
app.get('/update',(req,res) => {
    res.send('response from update')
})

//first parameter for address and second for call back

//starting the express server
app.listen(port,() => {
    console.log('server started'); 
})
//node express

//nodemon is used to restart the server, we need it because after every update we need to restart the server to see the changes
