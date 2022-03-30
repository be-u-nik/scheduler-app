const axios = require("axios");
const schedule = require("node-schedule");
const data = require("./data.json");

function job(date, string) {
  schedule.scheduleJob(date, function () {
    var wait = setTimeout(() => console.log(string), string.length * 1000);
  });
}

function scheduleLogs() {
  data.forEach(async (item) => {
    var dateSplits = item.dateTime && item.dateTime.split(" ");
    var localdate =
      dateSplits && new Date(`${dateSplits[0]}T${dateSplits[1]}Z`);
    localdate && localdate.setHours(localdate.getHours() - 5);
    localdate && localdate.setMinutes(localdate.getMinutes() - 30);
    var res = await axios
      .get(`http://localhost:3005/${item.text}`)
      .then((res) => {
        return res.data;
      });
    job(localdate, res);
  });
}

module.exports = scheduleLogs;
