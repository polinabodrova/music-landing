const fs = require("fs");
const http = require("http");
const url = require("url");
const templateHome = fs.readFileSync(`${__dirname}/index.html`, "utf-8");
// console.log(templateOverview);
const templateWork = fs.readFileSync(
  `${__dirname}/templates/work.html`,
  "utf-8"
);
const templatePricing = fs.readFileSync(
  `${__dirname}/templates/price.html`,
  "utf-8"
);
const templateContacts = fs.readFileSync(
  `${__dirname}/templates/contacts.html`,
  "utf-8"
);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  console.log(req.url);
  const baseURL = `http://${req.headers.host}`;
  console.log(baseURL);
  const requestURL = new URL(pathName, baseURL);
  console.log(requestURL);
  const pathname = requestURL.pathname;
  console.log(pathname);
  //overview page
  if (pathname === "/home") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(templateHome);
  } else if (pathname === "/work") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(templateWork);
  } else if (pathname === "/pricing") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(templatePricing);
  } else if (pathname === "/contacts") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(templateContacts);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>Page not found</h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listening to request");
});
