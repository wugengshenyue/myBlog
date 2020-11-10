const express = require("express");

const { getNewComment, addComment } = require("../../services/index");

const routes = express.Router();



routes.get("/getNewComment", async (req, res) => {
    let { size } = req.query;

    let data = await getNewComment(parseInt(size));

    res.status(200).send(data);
})

routes.post("/addComment", async (req, res) => {
    let { id, name, content } = req.body;

    let data = await addComment(id, name, content);

    res.status(200).send(data);
})





module.exports = routes;