const express = require("express");
const path = require("path");
const usersRouter = require("./controller/user.controller");
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", usersRouter);

app.listen(8080, () => console.log("server is running on port 8080"));
