const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("/GET index router"));


module.exports = indexRouter;
