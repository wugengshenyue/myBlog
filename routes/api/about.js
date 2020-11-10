const express = require("express");

const { getAbout, addAbout } = require("../../services/index");

const routes = express.Router();



routes.get("/getAbout", async (req, res) => {
    let data = await getAbout();
    res.status(200).send(data);
})


routes.post("/addAbout", async (req, res) => {
    let { content } = req.body;
    let data = await addAbout(content);
    res.status(200).send(data);
})



module.exports = routes;