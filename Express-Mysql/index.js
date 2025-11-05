const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 3000;


    let conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbuser'
})

conn.connect((err)=>{
    if(err)
    {
        console.log(err);
    }
    console.log("Connection Successful")
})



app.set("view engine", "ejs")

app.use(express.json())
app.use(bodyParser.urlencoded())

app.get('/', (req, res)=>{

    res.send("Welcome")
});


app.get('/insert', (req, res)=>{

    
    let sql = "select * from user"
    conn.query(sql, (err,result)=>{
        if(err)
        {
            throw err
        }
            
        console.log(result)

        res.render('insert', {data : result})
        /* result.map((result)=>{
            console.log(`${result.id}\t\t\t${result.name}\t\t\t${result.email}`)
        }) */

    })
   
    
});

app.post('/insertUser', (req, res)=>{

    let {name, email}  = req.body
    let sql = `insert into user(name, email) values('${name}','${email}')`
    manipulate(sql, "Record Inserted")
    
     res.redirect('/insert')
    
});


app.put('/updateUser/:id/:name/:email', (req, res)=>{


    let {id, name, email}  = req.params
   
    let sql = `update user set name='${name}', email='${email}' where id=${id}`
    manipulate(sql, "Record Updated")

    
    res.redirect('/insert')
    
});


app.delete('/deleteUser/:id', (req, res)=>{


    let id =  req.params.id
    let sql = `delete from user where id=${id}`
    manipulate(sql, "Record Deleted")

    res.redirect('/insert')
    
});


app.listen(port, ()=>{

    console.log(`Server is running on port : ${port}`);
});



function manipulate(sql, message)
{
    try
    {
        conn.query(sql);
        console.log(message)

    }
    catch(err)
    {
        console.log(err)
    }
        
}

