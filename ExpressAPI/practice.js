const express = require('express');
const app = express();
const port = 3000;


const myLogger = function (req, res, next) {
    console.log('LOGGED');
    next();
}
//app.use(myLogger);


const requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
}


app.use(requestTime);

app.get('/',(req, res)=>{
    let  responseText = "Welcomr to Express<br>"
    responseText += `Requested at : ${req.requestTime}`
    res.send(responseText);
})



app.listen(port, ()=>{

    console.log(`Server is running on port : ${port}`);
});
