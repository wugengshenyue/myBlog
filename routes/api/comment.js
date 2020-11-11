const express = require("express");

const { getNewComment, addComment } = require("../../services/index");

const routes = express.Router();



routes.get("/getNewComment", async (req, res) => {
    let { size } = req.query;

    let data = await getNewComment(parseInt(size));

    res.status(200).send(data);
})

routes.post("/addComment", async (req, res) => {
    let { id, name, content, captcha } = req.body;

    if (captcha.toLowerCase() === req.session.captcha) {
        let data = await addComment(id, name, content);
        res.status(200).send(data);
    } else {
        res.status(200).send({ msg: '验证码错误' });
    }
    req.session.captcha = "";
})





module.exports = routes;