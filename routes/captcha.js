const svgCaptcha = require("svg-captcha");

module.exports = (req, res) => {
    let captcha = svgCaptcha.create({ size: 6, ignoreChars: "0o1i", noise: 3, color: true });
    req.session.captcha = captcha.text;
    res.type('svg');
    res.status(200).send(captcha.data);
}