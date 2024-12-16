// Import http module
const http = require('http');

// Create server
const server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to backend development with Node.js');
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Contact us at backend@nodejs.com');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

// Define the port
const port = 4600;

// Start the server
server.listen(port, () => {
    console.log(`Server is running successfully`);
});
