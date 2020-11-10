const express = require("express");

const { getEveryDay, addEveryDay } = require("../../services/index");

const routes = express.Router();



routes.get("/getEveryDay", async (req, res) => {
    let data = await getEveryDay();
    res.status(200).send(data);
})


routes.post("/addEveryDay", async (req, res) => {
    let { content } = req.body;
    let data = await addEveryDay(content);
    res.status(200).send(data);
})



module.exports = routes;