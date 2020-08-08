const http = require('http');
const nodeinfo = require('nodejs-info');

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(nodeinfo(req));
});

server.listen(3000, () => console.log('Listening on port 3000'));
