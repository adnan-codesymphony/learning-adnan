const express = require("express");
const customers = require("./customers-1000.json");
const mysql = require("mysql2/promise");
const app = express();
const port = 3000;

async function getRecords(offset)
{
    const conn = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbuser",
    });

    console.log("Connection Successful");

    const [rows] = await conn.execute(`select * from customers order by c_index limit ${offset*10-10},10`)
    //console.log(rows)
    return rows
}





app.get("/", (req, res) => {
  res.send("Welcome");
});

/* 
app.get("/insertCustomers", (req, res) => {
  customers.map((customers, index) => {
    conn.then((c) => {


      c.execute(`insert into customers(c_index, customer_id, firstname, lastname, company, city, country, phone1, phone2, email, subscription_date, website) values(${customers.Index}, '${customers["Customer Id"]}', '${customers["First Name"]}', '${customers["Last Name"]}', '${customers.Company}', '${customers.City}','${customers.Country}','${customers["Phone 1"]}','${customers["Phone 2"]}','${customers.Email}','${customers["Subscription Date"]}', '${customers.Website}')`);

                
    });
  });

        res.redirect('/')
});

 */


app.get("/display/:offset", async (req, res) => {
  
      const offset = req.params.offset
      const rows = await getRecords(offset)

      res.send(rows)

      //res.redirect('/')
});

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});









// customers.map((customers, index)=>{

//             console.log(`${customers.Index}\t${customers['First Name']}`)
//     })

//  sql = "insert into user(name, email) values('ruturaj', 'ruturaj@gmail.com')";
//   conn.then((c) => {
//         c.execute(sql)
//   });
//   console.log("Record Inserted");
