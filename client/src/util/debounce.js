function debounce(handler, delay) {
    var timer = null;
    return function () {
        clearTimeout(timer)
        var self = this;
        var arg = arguments;
        timer = setTimeout(function () {
            handler.apply(self, arg);
        }, delay)

    }
};

module.exports = debounce;