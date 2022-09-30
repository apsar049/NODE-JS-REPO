const fs = require('fs');
const http = require('http');
fs.writeFile(
  'index.html',
  '<h1> Hello World </h1><p> This is Apsar </p>',
  (err) => {
    if (err) console.log(err);
  }
);

http
  .createServer((req, resp) => {
    resp.write('<h1> Hello World </h1><p> This is Apsar </p>');
    resp.end();
  })
  .listen(5000);
