const express = require("express");

const { getGuestBook, addGuestBook } = require("../../services/index");

const routes = express.Router();



routes.get("/getGuestBook", async (req, res) => {
    let data = await getGuestBook();
    res.status(200).send(data);
})


routes.post("/addGuestBook", async (req, res) => {
    let { content } = req.body;
    let data = await addGuestBook(content);
    res.status(200).send(data);
})



module.exports = routes;