const express=require('express');
const app=express();
const port=process.env.PORT || 8000
const imp=require('./data.json')

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.get('/doi',(req,res)=>{
    res.send(imp);
});

app.listen(port);