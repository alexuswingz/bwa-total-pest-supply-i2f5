// Serves index.html — added by BuildWithAlex Studio so Railway can host this app.
const http = require("http");
const fs = require("fs");
const html = fs.readFileSync(__dirname + "/index.html");
http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(html);
}).listen(process.env.PORT || 3000, () => console.log("app is live"));
