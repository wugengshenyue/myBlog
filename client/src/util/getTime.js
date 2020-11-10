function weeksBetw(date1, date2) {
    var dt1 = new Date(date1).getTime();
    var dt2 = new Date(date2).getTime();
    return Math.ceil(Math.abs(dt1 - dt2) / 1000 / 60 / 60 / 24)
}

module.exports = weeksBetw;