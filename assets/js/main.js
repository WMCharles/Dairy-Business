const shedProduction = {A:510, B:308, C:486, D:572}
const leapYear = {January:31, February:29, March:31, April:30, May:31, June:30, July:31, August:31, September:30, October:31, November:30, December:31}

let selling_price = 45;
var dailyProduction = 0;
let week = 7;
let year = 365;
let time;

const id1 = document.getElementById('total')
const id2 = document.getElementById('income')
const id3 = document.getElementById('LeapYear')

const btn1 = document.getElementById('totalProduction')

btn1.addEventListener('click', totalProduction)
btn1.addEventListener('click', incomeOverTime)
btn1.addEventListener('click', incomeLeapYear)

