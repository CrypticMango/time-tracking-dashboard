"use strict";

import time from './data.json' assert { type: 'json'};

console.log(time);

const dailyButton = document.getElementById("daily");
const weeklyButton = document.getElementById("weekly");
const monthlyButton = document.getElementById("monthly");

dailyButton.addEventListener("click", dailySwitch);
weeklyButton.addEventListener("click", weeklySwitch);monthlyButton.addEventListener("click", monthlySwitch);

function dailySwitch() {
    alert("daily");
}

function weeklySwitch() {
    alert("weekly");
}

function monthlySwitch() {
    alert("monthly");
}