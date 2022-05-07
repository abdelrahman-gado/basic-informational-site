const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  let filePath;
  switch (url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      filePath = path.join(__dirname, "pages", "index.html");
      break;
    case "/about":
    case "/about.html":
      res.writeHead(200, { "Content-Type": "text/html" });
      filePath = path.join(__dirname, "pages", "about.html");
      break;
    case "/contact-me":
    case "/contact-me.html":
      res.writeHead(200, { "Content-Type": "text/html" });
      filePath = path.join(__dirname, "pages", "contact-me.html");
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/html' });
      filePath = path.join(__dirname, "pages", "404.html");
      break;
  }
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    res.end(data);
  });

});


server.listen(PORT, () => console.log(`Server is ready and listening at port ${PORT}`));
