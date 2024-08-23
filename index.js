const http = require("http");
const fs = require("fs").promises;

const app = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      fs.readFile(__dirname + "/index.html")
        .then((contents) => {
          res.writeHead(200, { "Content-type": "text/html" });
          res.write(contents);
          res.end();
        })
        .catch((err) => {
          res.writeHead(500);
          res.end(err);
          return;
        });
      break;

    case "/about":
      fs.readFile(__dirname + "/about.html")
        .then((contents) => {
          res.writeHead(200, { "Content-type": "text/html" });
          res.write(contents);
          res.end();
        })
        .catch((err) => {
          res.writeHead(500);
          res.end(err);
          return;
        });
      break;

    case "/contact-me":
      fs.readFile(__dirname + "/contact-me.html")
        .then((contents) => {
          res.writeHead(200, { "Content-type": "text/html" });
          res.write(contents);
          res.end();
        })
        .catch((err) => {
          res.writeHead(500);
          res.end(err);
          return;
        });
      break;

    default:
      fs.readFile(__dirname + "/404.html")
        .then((contents) => {
          res.writeHead(200, { "Content-type": "text/html" });
          res.write(contents);
          res.end();
        })
        .catch((err) => {
          res.writeHead(500);
          res.end(err);
          return;
        });
      break;
  }
});

app.listen(8000);
