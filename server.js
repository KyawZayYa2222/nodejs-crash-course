import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
})

server.listen(PORT, function() {
    console.log('Server is running on port 8080');
});