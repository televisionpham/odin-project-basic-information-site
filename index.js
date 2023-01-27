import { createServer } from "http";
import { readFile } from "fs";

const hostname = "localhost";
const port = 8000;

const server = createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    readFile("index.html", "utf-8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        throw err;
      }

      res.statusCode = 200;
      res.end(data);
    });
  } else if (req.url === "/about") {
    readFile("about.html", "utf-8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        throw err;
      }

      res.statusCode = 200;
      res.end(data);
    });
  } else if (req.url === "/contact") {
    readFile("contact-me.html", "utf-8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        throw err;
      }

      res.statusCode = 200;
      res.end(data);
    });
  } else {
    readFile("404.html", "utf-8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        throw err;
      }

      res.statusCode = 404;
      res.end(data);
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
