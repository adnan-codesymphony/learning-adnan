const mysql = require('mysql');

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


/*   
sql = "insert into user(name, email) values('Siraj', 'siraj@gmail.com')"
manipulate(sql, "Record Inserted")

sql = "insert into user(name, email) values('a', 'a@gmail.com')"
manipulate(sql, "Record Inserted")

 */ 

// sql = "update user set id=5 where id=12"
// manipulate(sql, "Record Updated")


// sql = "delete from user where id > 19"
// manipulate(sql, "Record Deleted")

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



conn.end()





/* 
let sql = `create table if not exists user( id int auto_increment primary key, name varchar(25), email varchar(40))`
conn.query(sql, (err,result)=>{
    if(err)
    {
        throw err
    }
        
    console.log("Table Created")
})
 */

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
sql = "delete from user where name='Sumit'"

conn.query(sql, (err,result)=>{
    
    console.log("Record Deleted")
})


*/

// sql = "select * from user"

// conn.query(sql, (err,result)=>{
//     if(err)
//     {
//         throw err
//     }
        
//     console.log(result)
// })
