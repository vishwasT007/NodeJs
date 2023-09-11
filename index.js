const http = require('http');
const fs = require('fs');
const url = require('url');



// template
const templateOverview = fs.readFileSync(`${__dirname}/templates/overview.html`,'utf-8');
const templateCards = fs.readFileSync(`${__dirname}/templates/cards.html`, 'utf-8');
const templateProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8');



const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf8');
const parsedDataObject = JSON.parse(data);
// console.log(parsedDataObject);
// console.log(data);



// Create Server

const server = http.createServer((request, response) => {
  const pathName = request.url;
  
 // Overview
  if(pathName === '/' || pathName === '/overview') {
    response.writeHead(200, {
      'Content-type': 'text/html'
    })

    const cardsHtml = parsedDataObject.map(function(element){
      console.log(element);
    });
    console.log("hey",cardsHtml);
    response.end(templateOverview);

    // Product
  } else if(pathName === '/product') {
    response.end('This is Product');

    // API
  } else if(pathName === '/api') {
    response.writeHead(200, {
      'Content-type': 'application/json'
    });
    response.end(data);
  } else {
    response.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world'
    });
    response.end('<h1> Page not found </h1>');
  }
})


server.listen(8000, '127.0.0.1', () => {
  console.log('Server is listening on port 8000');
})