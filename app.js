"use strict";

import time from './data.json' assert {type: 'json'};
console.log(time);

const dailyButton = document.getElementById("daily");
const weeklyButton = document.getElementById("weekly");
const monthlyButton = document.getElementById("monthly");

var dailyHours = document.querySelectorAll(".daily-time");
const previousDailyHrs = document.querySelectorAll(".previous-daily");

var weeklyHours = document.querySelectorAll(".weekly-time");
const previousWeeklyHrs = document.querySelectorAll(".previous-weekly");

var monthlyHours = document.querySelectorAll(".monthly-time");
const previousMonthlyHrs = document.querySelectorAll(".previous-monthly");

dailyButton.addEventListener("click", dailySwitch);
weeklyButton.addEventListener("click", weeklySwitch);
monthlyButton.addEventListener("click", monthlySwitch);

function dailySwitch() {
    dailyButton.style.color = "white";
    weeklyButton.style.color = "hsl(235, 45%, 61%)";
    monthlyButton.style.color = "hsl(235, 45%, 61%)";
    dailyHours.forEach(item => item.style.display = "block");
    weeklyHours.forEach(item => item.style.display = "none");monthlyHours.forEach(item => item.style.display = "none");

    previousDailyHrs.forEach(item => item.style.display = "block");
    previousWeeklyHrs.forEach(item => item.style.display = "none");
    previousMonthlyHrs.forEach(item => item.style.display = "none");
}

function weeklySwitch() {
    weeklyButton.style.color = "white";
    dailyButton.style.color = "hsl(235, 45%, 61%)";
    monthlyButton.style.color = "hsl(235, 45%, 61%)";
    weeklyHours.forEach(item => item.style.display = "block");
    dailyHours.forEach(item => item.style.display = "none");
    monthlyHours.forEach(item => item.style.display = "none");

    previousDailyHrs.forEach(item => item.style.display = "none");
    previousWeeklyHrs.forEach(item => item.style.display = "block");
    previousMonthlyHrs.forEach(item => item.style.display = "none");
}

function monthlySwitch() {
    monthlyButton.style.color = "white";
    dailyButton.style.color = "hsl(235, 45%, 61%)";
    weeklyButton.style.color = "hsl(235, 45%, 61%)";
    monthlyHours.forEach(item => item.style.display = "block");
    dailyHours.forEach(item => item.style.display = "none");
    weeklyHours.forEach(item => item.style.display = "none");

    previousDailyHrs.forEach(item => item.style.display = "none");
    previousWeeklyHrs.forEach(item => item.style.display = "none");
    previousMonthlyHrs.forEach(item => item.style.display = "block");
}

weeklySwitch();