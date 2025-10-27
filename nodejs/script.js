/* 
const fs = require('fs');

 fs.readFile('file.txt','utf8', (err,data)=>{

        if (err)
        {
            console.log("Error reading file : "+err);
            return;    
        }
        console.log(data);
});
 

fs.writeFile('myfile2',"This is new file",()=>{
    console.log("Written to file");
});

console.log("Reading File");

 */


//-------------------------------------------------------------------------------



/* colors = ['red','blue','green'];

colors.forEach(c => console.log(c));
const length = colors.length;
console.log(length);


const user ={
    name : "John",
    age: 20
};

for(let i in user)
{
    console.log(`${i} : ${user[i]}`);
} */


//-------------------------------------------------------------------------------

/* 
const http = require('http');

http.createServer((req,res)=>{

    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('<h1>Welcome to Node.js</h1>');
}).listen(3000);

 */
/* 
http.listen(3000, (req,res)=>{
    console.log(`Server is running on 3000 port`);
});
 */


//-------------------------------------------------------------------------------

/* 
const os = require('os');

console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.platform());
console.log(os.release());
console.log(os.type());

*/

//-------------------------------------------------------------------------------

/* 
const path = require('path');

const a1 = path.basename('C:\\temp\\file.js');
const a2 = path.dirname('C:\\temp\\file.js');
const a3 = path.extname(__filename);
console.log(a1);
console.log(a2);
console.log(a3);

 */


