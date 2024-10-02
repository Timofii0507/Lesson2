const { getDate } = require("./GetDate");
const { getTime } = require("./GetTime");

const date = getDate();
const time = getTime();

console.log(`Поточна дата та час: ${date} ${time}`);