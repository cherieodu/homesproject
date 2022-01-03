const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", (req,res) => {
  res.render("client");
});

app.get("/admin", (req, res) => {
  res.render("admin_list");
});

app.listen(port, () => {
  console.log('Listening on port', port);
});