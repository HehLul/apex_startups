const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("/GET index router"));
// indexRouter.post('/',(req,res)=>{
//     const {word} = req.body()
//     res
// })

module.exports = indexRouter;
