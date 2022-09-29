// const http = require('http');
// const fs = require('fs');

// const server = http.createServer(function(req,res){
//   console.log('request created');
//   res.writeHead(200,{'Content-type': 'text/html'});
//   const read = fs.createReadStream(__dirname+ '/index.html','utf8');
//   read.pipe(res);
// });

// server.listen(5000,'127.0.0.1');
// console.log('Port is created')

const http = require("http");
const fs = require("fs");

fs.writeFileSync(
  "index.html",
  `<h1> Hello World </h1>
  <p> This is {Your Name}... </p>`
);

const server = http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {
    res.writeHead(200,'utf-8',{"Content-type":"text/html"})
    res.end(data);
  })
});

server.listen(5000, () => console.log("Server is created in port 5000"));
