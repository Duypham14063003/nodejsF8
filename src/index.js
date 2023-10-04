const path = require("path"); //video 9
const express = require("express");
const morgan = require("morgan"); //video 8
const handlebars = require("express-handlebars"); //video 9
const app = express();
const port = 3000;

const route = require("./routes"); //video 18
// video `0 -> doi file thanh static
app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan("combined")); // video 8

//video 16
app.use(
  express.urlencoded({
    extended: true,
  })
); //video 16
app.use(express.json()); //video 16

//XMLHttpRequest, fetch, axios

//Template engine video 9
//extname dung de doi lai duoi handlebars -> hbs
app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Route init
route(app); // video 18

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
