const http = require('http');
const fs = require('fs')
const path = require('path')

const hostname = '127.0.0.1';
const port = 3000;

let count = 0

function parseJsonAndAddProperty(data) {
  const obj = JSON.parse(data)
  obj.wololo = 'Napolizera'
  return obj
}

function requestHandler(req, res) {
  count+=1
  if(count % 1000 === 0) console.log("req", count)
  res.statusCode = 200;

  function onFileRead(err, data) {
    if (err) {
      console.log(err)
      return res.end("Error reading file")
    }

    const obj = parseJsonAndAddProperty(data)    
    res.setHeader('Content-Type', 'text/plain');
    res.end('asd');
  }

  fs.readFile(path.join(__dirname, 'json-sample.json'), { encoding: 'utf-8' }, onFileRead)
}

const server = http.createServer(requestHandler);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});