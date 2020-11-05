const express = require("express");

const { getBlog, getBlogAll } = require("../../services/index");

const routes = express.Router();




routes.get("/getBlog", async (req, res) => {
    let { id } = req.query;

    let data = await getBlog(id)

    res.status(200).send(data);
})


routes.get("/getBlogAll", async (req, res) => {
    let { page, size, keyword = "" } = req.query;

    let data = await getBlogAll(parseInt(page), parseInt(size), keyword);

    res.status(200).send(data);
})



module.exports = routes;