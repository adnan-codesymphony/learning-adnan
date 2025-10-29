const express = require('express');
const app = express();
const port = 3000;

app.set("view engine","ejs")
app.use(express.static('./public'))


app.use((req, res, next)=>{
    console.log("This is a Middleware")
    next()
})
app.use((req, res, next)=>{
    console.log("This is a Middleware2")
    next()
})



app.get('/',(req, res)=>{
    //res.send(`${req.query.q}`);
    res.render('index',{title:"Home Page", message: "This is Home Page"});
});
app.get('/about',(req, res)=>{
    
    res.render('about',{title:"About Page", message: "This is About Page"});
});
app.get('/profile',(req, res)=>{

    const user = {
        name: "John Doe",
        age: 25,
        email: "john@gmail.com"
    }
    res.render('profile',{user:user})

})

app.get('/error',(req, res)=>{
    
    throw new Error("Something Went Wrong")
});




app.use((err, req, res, next)=>{

    res.status(500)
    res.render('error', {error : err})
})


app.listen(port, ()=>{

    console.log(`Server is running on port : ${port}`);
});











// -----------------------------Middleware Practice-------------------------------------------


/* 
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
 */