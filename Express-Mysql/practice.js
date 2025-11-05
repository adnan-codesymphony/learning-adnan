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

    const sql = "select u.id, u.fullname, u.email, u.password, pd.gender, pd.address, pd.age, e.designation, e.department, e.salary from newuser u join personal_details pd on u.id=pd.id join employee e on u.id=e.id"
    const [rows] = await conn.execute(sql)
    
    console.log(rows)

    conn.end()

    

}




app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/insertRecords", (req, res) => {
  
    manipulate()
    res.redirect('/')
    
});


app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});




    // -----------------newUser--------------------------------------
    //const sql = "create table if not exists newUser ( id int auto_increment primary key, fullname varchar(40), email varchar(30), password varchar(20))" 

     // ----------------personal_details-----------------------------
    // const PDsql = "create table if not exists personal_details (pd_id int auto_increment primary key, gender varchar(6), age int, address varchar(30), id int references newuser(id))" 

    // -----------------employee-------------------------------------
   // const Empsql = "create table if not exists employee (emp_id int auto_increment primary key, designation varchar(20), department varchar(20), salary int, id int references newuser(id))"


    // await Promise.all([conn.execute(PDsql), conn.execute(Empsql)])
    // console.log("Table Created")


   
    // await Promise.all([conn.execute(insertUser),conn.execute(insertPD),conn.execute(insertEmp)])

    // console.log("Record Inserted")






    /* await conn.execute(sql) */

     // insertUser = "insert into newuser(fullname, email, password) values('Amit Mehta','amit@gmail.com','amit')"

    // insertPD = "insert into personal_details(gender, age, address, id) values('Male',20,'Jamnagar',1)"

    // insertEmp = "insert into employee(designation, department, salary, id) values('Manager','IT',15000,1)"


/*
    const valuesUser = [
        ["Rohit Sharma",'rohit@gmail.com','rohit'],
        ["Virat Kohli",'virat@gmail.com','virat'],
        ["Shubhman Gill",'shubhman@gmail.com','shubhman'],
        ["Sumit Sharma",'sumit@gmail.com','sumit'],
    ]

    const valuesPD = [
        ['Male',35,'Mumbai',2],
        ['Male',33,'Banglore',3],
        ['Male',25,'Rajkot',4],
        ['Male',21,'Ahmedabad',5],

    ]

    const valuesEmp = [
        ['Manager','HR',20000,2],
        ['Worker','Production',15000,3],
        ['Tester','IT',10000,4],
        ['Developer','IT',7000,5],
        
    ]

    insertUser = "insert into newuser(fullname, email, password) values ?"
    insertPD = "insert into personal_details(gender, age, address, id) values ?"
    insertEmp = "insert into employee(designation, department, salary, id) values ?"



    await Promise.all([conn.query(insertPD, [valuesPD]), conn.query(insertEmp, [valuesEmp])])

    //await conn.query(insertUser, [valuesUser])

    console.log("Records Inserted")


 */

