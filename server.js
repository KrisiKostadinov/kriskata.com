const express = require("express");
const next = require("next");

const port = process.env.PORT || 3000;
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Custom API route (пример)
  server.get("/api/hello", (req, res) => {
    res.json({ message: "Здравей от сървъра!" });
  });

  // Всички останали заявки минават през Next.js
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`Сървърът работи на http://localhost:${port}`);
  });
});