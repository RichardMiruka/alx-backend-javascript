const { createServer } = require('node:http'); // Import the http module to create a server

const hostname = '127.0.0.1'; // Defines the hostname as localhost - server is set to listen on the specified port on the local machine
const port = 3000; // Defines the port as 3000 - server is set to listen on port 3000

const server = createServer((req, res) => { // Creates a new HTTP server object and returns it
  res.statusCode = 200; // Sets the status code of the response to 200 OK / successful
  res.setHeader('Content-Type', 'text/plain'); // Sets the content type of the response to plain text
  res.end('Hello World'); // Sends a response with the message "Hello World"
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
