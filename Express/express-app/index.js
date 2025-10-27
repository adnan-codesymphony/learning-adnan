const express = require('express');
const app = express();
const port = 3000;
const data = require('./data.json');

app.get('/find',(req,res)=>{
    res.send(data);
});
app.get('/find/:id',(req,res)=>{
    res.send(data[(req.params.id)-1]);
});

console.log(data);


app.listen(port, ()=>{

    console.log(`Server is running on port : ${port}`);
});
