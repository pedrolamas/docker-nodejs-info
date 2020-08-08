const http = require('http');
const nodeinfo = require('nodejs-info');

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(nodeinfo(req));
});

server.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));
