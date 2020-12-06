const http = require('http');
const hp = require('./hp');

const HOST = 'localhost';
const PORT = 9999;

const server = http.createServer(hp);

server.listen(PORT, HOST, () => {
	console.log(`Running on http://${HOST}:${PORT}`);
});
