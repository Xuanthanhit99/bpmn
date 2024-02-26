const express = require("express");
const session = require("express-session");
const path = require("path");
const cors = require("cors");
const router = require("./router/index");
const bodyParser = require("body-parser");
const dotenv =  require("dotenv");
var xmlparser = require('express-xml-bodyparser');

const { MongoClient } = require("mongodb");
const { XMLValidator, XMLBuilder } = require("fast-xml-parser");
dotenv.config({ path: path.join(__dirname, "../.env") });
// const uri = "mongodb+srv://xuanthanhit99:YopQnjJmAYJmVMDl@cluster0.qbhc3gj.mongodb.net/";
const uri = "mongodb+srv://xuanthanhit99:YopQnjJmAYJmVMDl@cluster0.qbhc3gj.mongodb.net/?retryWrites=true&w=majority"
const port = process.env.SERVER_PORT || 7748;

const app = express();
// other Express middleware and configurations
const sess = {
  secret: "poppy",
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 week
  },
  resave: true,
  saveUninitialized: true,
  authCodeUrlRequest: {},
  isAuthenticated: false,
  user_email: "",
  accessToken: "",
  idToken: "",
  account: {},
};
// YopQnjJmAYJmVMDl
app.use(cors());
app.use(session(sess));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.all("(/[s]?api/*)", (req, res, next) => {
  if (!req.session || !req?.session?.isAuthenticated) res.send("403!");
  else next();
});

app.use(router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../build")));

  app.all("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../build", "index.html"));
  });
} else {
  app.get("/my-session", (req, res) => {
    res.send(req.session);
  });
}

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
