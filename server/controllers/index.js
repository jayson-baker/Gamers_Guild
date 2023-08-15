const router = require("express").Router();

const apiRoute = require("./apiRoute");

router.use("/", apiRoute);


module.exports = router;
//this is required to bypass the cors Proxy for our api.