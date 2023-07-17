const { Router, Router } = require("express");
const Router = Router();

Router.get("/test", (req, res) => {
  const data = {
    name: "Fazt",
    wedsite: "faztweb.com",
  };
  res.json("data");
});

module.export = Router;
