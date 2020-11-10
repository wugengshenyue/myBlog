const express = require("express");

const { getRandomTag, getTagBlogAll } = require("../../services/index");

const routes = express.Router();



routes.get("/getRandomTag", async (req, res) => {
    let { size } = req.query;

    let data = await getRandomTag(parseInt(size));

    res.status(200).send(data);
})

routes.get("/getTagBlogAll", async (req, res) => {
    let { tag, page, size } = req.query;

    let data = await getTagBlogAll(tag, parseInt(page), parseInt(size));

    res.status(200).send(data);

    // http://localhost:8081/api/getTagBlogAll?tag=gas&page=1&size=10
})




module.exports = routes;