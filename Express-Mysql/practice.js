const express = require("express");
const mysql = require("mysql2/promise");
const app = express();
const port = 3000;

async function manipulate()
{
    const conn = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "dbuser"
    })

    console.log("Connection Successful")

    /* await conn.execute(sql) */

    // insertUser = "insert into newuser(fullname, email, password) values('Amit Mehta','amit@gmail.com','amit')"

    // insertPD = "insert into personal_details(gender, age, address, id) values('Male',20,'Jamnagar',1)"

    // insertEmp = "insert into employee(designation, department, salary, id) values('Manager','IT',15000,1)"

    await Promise.all([conn.execute(insertUser),conn.execute(insertPD),conn.execute(insertEmp)])

    console.log("Record Inserted")
    conn.end()

    

}




app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/createTable", (req, res) => {
  
    manipulate()
    res.redirect('/')
    
});


app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});











    // -----------------newUser--------------------------------------
    //const sql = "create table if not exists newUser ( id int auto_increment primary key, fullname varchar(40), email varchar(30), password varchar(20))" 

     // ----------------personal_details-----------------------------
    /* const PDsql = "create table if not exists personal_details (pd_id int auto_increment primary key, gender varchar(6), age int, address varchar(30), id int references newuser(id))" 

    // -----------------employee-------------------------------------
    const Empsql = "create table if not exists employee (emp_id int auto_increment primary key, designation varchar(20), department varchar(20), salary int, id int references newuser(id))"


    await Promise.all([conn.execute(PDsql), conn.execute(Empsql)])
    console.log("Table Created")

 */

