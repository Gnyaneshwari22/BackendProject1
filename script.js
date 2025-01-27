const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Server is created");

  res.setHeader("Content-Type", "text/html");

  if (req.url == "/node") {
    res.statusCode = 200;
    res.end(`<h1>Welcome to My NodeJS Project!</h1>`);
  } else if (req.url == "/home") {
    res.statusCode = 200;
    res.end(`<h1>Welcome to Home</h1>`);
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end(`<h1>Welcome to About Page</h1>`);
  } else {
    res.statusCode = 404;
    res.end(`<h1>Page not found</h1>`);
  }
});

// Start the server
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
