const Router = require("express").Router();
const XmlRouter = require("./xmlRouter")

Router.use(XmlRouter);
module.exports = Router
