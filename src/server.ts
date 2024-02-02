import express from "express";
import { html } from "./templating.js";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const template = html<void>` <!DOCTYPE html>
    <html lang="en" dir="ltr">
      <head>
        <title>CSS Custom Property Test</title>
      </head>
      <body>
        <h1>Hello world</h1>
      </body>
    </html>`;
  res.send(template.render());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
