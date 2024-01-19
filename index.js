const express=require('express');
const path=require('path');
const app=express();

const port=5056;
// app.get('/',(req,res,next)=>{
//     res.send("port stareted at 5056 hiiiiiiiiiiiii");
// })

app.use(express.static(path.join(__dirname,'static')));...............

app.get('/information',(req,res)=>{
    console.log(req);
    res.send(`name=${req.query.name} && password=${req.query.password}`);
})

app.post('/information',(req,res)=>{
    console.log(req.body);
    res.send("data send successfully");
})

//data using params 
app.get('/student/:roll([0-9]{2})/:section([A-Za-z])',(req,res,next)=>{
    console.log(req.params);
    res.send(`rollno:${req.params.roll} & section=${req.params.section}`);
})

app.listen(port,()=>{
    console.log("project started hello");
})
