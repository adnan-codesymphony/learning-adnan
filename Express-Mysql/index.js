const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbuser'
})

conn.connect()

let sql = `create table if not exists user( id int auto_increment primary key, name varchar(25), email varchar(40))`
conn.query(sql, (err,result)=>{
    if(err)
    {
        throw err
    }
        
    console.log("Table Created")
})

//sql = "insert into user(name, email) values('Rohit', 'rohit@gmail.com')"
 //sql = "insert into user(name, email) values('Sumit', 'sumit@gmail.com')"
/* 
conn.query(sql, (err,result)=>{
    if(err)
    {
        throw err
    }
        
    console.log("Record Inserted")
})
  */


/* sql = "update user set name = 'Shubhman' , email = 'shubhman@gmail.com' where id=1"

conn.query(sql, (err,result)=>{
    if(err)
    {
        throw err
    }
        
    console.log("Record Updated")
})
 */

/* 
sql = "delete from user where id=4"

conn.query(sql, (err,result)=>{
    
    console.log("Record Deleted")
})
 
 */

sql = "select * from user"

conn.query(sql, (err,result)=>{
    if(err)
    {
        throw err
    }
        
    console.log(result)
})
conn.end()

app.listen(port, ()=>{

    console.log(`Server is running on port : ${port}`);
});
