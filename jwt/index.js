var express = require('express');
var jwt = require('jsonwebtoken');   
var bodyParser = require('body-parser')
const cors = require('cors');
const app = express();


app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())

let users = [{user:'foo1',password:'bar1',access:['test1']},{user:'foo1',password:'bar1',access:['test2']}]

app.post('/api/login',cors(),function(req,res){
    const user = {id:3}
    console.log(req.body)
    const token = jwt.sign({user},'my_secret_key')
    res.json({
        token:token
    })
})

app.get('/api/protected',ensureToken,function(req,res){
    jwt.verify(req.token,'my_secret_key',function(err,data){
        if(err){
            req.sendStatus(403)
        }else{
            res.json({
                text:'this is protected',
                data:data
            })
        }
    })
})

function ensureToken(req,res,next){
    const bearerHeader = req.headers["authorization"]
    if((typeof bearerHeader) != 'undefined'){
        const bearer = bearerHeader.split(" ")
        const bearerToken = bearer[1]
        req.token = bearerToken
        next()
    }else{
        res.sendStatus(403)
    }
}


app.get('/api',function(req,res){
    res.json({
        text:'my api!'
    })
})


app.listen(3008,function(){
    console.log('App listening on port 3008')
})