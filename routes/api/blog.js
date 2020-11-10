const express = require("express");

const { getBlog, getBlogAll, getHotBlog, addBlog } = require("../../services/index");

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

routes.get("/getHotBlog", async (req, res) => {
    let { size } = req.query;

    let data = await getHotBlog(parseInt(size));

    res.status(200).send(data);
})


routes.post("/addBlog", async (req, res) => {
    let { title, contentHtml,contentText, tags } = req.body;
 
    let data = await addBlog(title, contentHtml,contentText, tags);

    if (data) {
        res.status(200).send({ msg: "发布文章成功" });
    } else {
        res.status(200).send({ msg: "发布文章失败" });
    }

})


module.exports = routes;