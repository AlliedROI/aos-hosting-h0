// The smallest site Allied AOS hosting can publish: one page, one health path.
const http = require("node:http");
const port = Number(process.env.PORT || 8080);
http.createServer((req, res) => {
  if (req.url === "/healthz") {
    res.writeHead(200, { "content-type": "text/plain" });
    return res.end("ok");
  }
  res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  res.end("<!doctype html><title>Allied AOS hosting test</title><h1>Published by Allied AOS</h1><p>H0 test site.</p><p>Deployed on merge (H4b), from a push event.</p><p>Launched from a project step (H6).</p><p>Launched from the chat (H6c).</p>");
}).listen(port, () => console.log(`listening on ${port}`));
