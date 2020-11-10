function getRandom(min, max) {
    const section = max - min;
    return min + Math.floor(Math.random() * section);
}

module.exports = getRandom;