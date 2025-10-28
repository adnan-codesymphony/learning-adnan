const express = require('express');
const app = express();
const port = 3000;
const data = require('./data.json');
const user = require('./user.json');

app.get('/',(req,res)=>{
    res.send("Welcome to Express");
});

app.get('/find',(req,res)=>{
    res.send(data);
});
app.get('/find/:id',(req,res)=>{
    res.send(data[(req.params.id)-1]);
});


app.get('/user/:userId',(req,res)=>{
    let uId = req.params.userId;
    let txt = "";

    user.map((user,index)=>{
    
        if(user.userId == uId)
        {
             txt += `<br>${user.id}=========${user.title}========${user.body}`;    
        }
         
    });

    res.send(txt);

});



app.listen(port, ()=>{

    console.log(`Server is running on port : ${port}`);
});
