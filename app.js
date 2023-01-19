"use strict";

import time from './data.json' assert { type: 'json'};
console.log(time);

var dailyWorkCurrent = time[0].timeframes.daily.current;
var dailyWorkPrevious = time[0].timeframes.daily.previous;
console.log(dailyWorkCurrent);
console.log(dailyWorkPrevious);

const dailyButton = document.getElementById("daily");
const weeklyButton = document.getElementById("weekly");
const monthlyButton = document.getElementById("monthly");

dailyButton.addEventListener("click", dailySwitch);
weeklyButton.addEventListener("click", weeklySwitch);monthlyButton.addEventListener("click", monthlySwitch);

function dailySwitch() {
    alert("daily");
    dailyButton.style.color = "white";
    weeklyButton.style.color = "hsl(235, 45%, 61%)";
    monthlyButton.style.color = "hsl(235, 45%, 61%)";
}

function weeklySwitch() {
    alert("weekly");
    weeklyButton.style.color = "white";
    dailyButton.style.color = "hsl(235, 45%, 61%)";
    monthlyButton.style.color = "hsl(235, 45%, 61%)";
}

function monthlySwitch() {
    alert("monthly");
    monthlyButton.style.color = "white";
    dailyButton.style.color = "hsl(235, 45%, 61%)";
    weeklyButton.style.color = "hsl(235, 45%, 61%)";
}