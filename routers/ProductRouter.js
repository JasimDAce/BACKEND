const expres = require('expres');

const router = express();

router.get('/add',(req,res)=>{
    res.send('This is add from product')
})

router.get('/getall',(req,res)=>{
    res.send('This is getall inside product')
})