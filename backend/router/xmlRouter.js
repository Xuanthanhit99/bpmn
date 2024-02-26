const Router = require("express").Router();
const { postXmlController, getXmlController } = require('../controller/xmlController');

// export const router = Router();

Router.post("/xml", postXmlController)
Router.post("/bpmnxml", getXmlController)
module.exports = Router