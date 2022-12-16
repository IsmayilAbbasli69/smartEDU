const express = require("express");
const app = express();

const port = 3000;
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).render("index",{
page_name:"index"

  });
});
app.get("/about", (req, res) => {
    res.status(200).render("about",{
        page_name:"about"
    });
  });
  app.get("/contact", (req, res) => {
    res.status(200).render("contact",{
        page_name:"contact"
    });
  });


app.listen(port, () => {
  console.log(`${port} is active`);
});
