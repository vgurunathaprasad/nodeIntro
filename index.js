const { area, circumference } = require("./circle");
const capitalize = require("./capitalize");
const dayjs = require("dayjs");

const radius = 10;

console.log(area(radius));
console.log(circumference(radius));

console.log(capitalize("rama"));


console.log(
    dayjs()
        .startOf("month")
        .add(1,"day")
        .set("year",2018)
        .format("YYYY-MM-DD HH:mm:ss")
);