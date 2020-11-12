let now_date = new Date();
var dateRu = new Intl.DateTimeFormat("ru", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});
var dateEn = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});
var dateCh = new Intl.DateTimeFormat("zh-Hans-CN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});
var dateGer = new Intl.DateTimeFormat("de-DE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});

let dateMap = new Map([
    ["ru", dateRu.format(now_date)],
    ["en-US", dateEn.format(now_date)],
    ["zh-Hans-CN", dateCh.format(now_date)],
    ["de-DE", dateGer.format(now_date)]
])

dateMap.forEach(date => console.log(date))