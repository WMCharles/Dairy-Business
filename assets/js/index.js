let shedProduction = {}

const leapYear = {January:31, February:29, March:31, April:30, May:31, June:30, July:31, August:31, September:30, October:31, November:30, December:31}
let selling_price = 45;
var dailyProduction = 0;
let week = 7;
let year = 365;
let time;




function report(){

    shedProduction.A = parseInt(document.getElementById('first-a').value);
    shedProduction.B = parseInt(document.getElementById('first-b').value);
    shedProduction.C = parseInt(document.getElementById('first-c').value);
    shedProduction.D = parseInt(document.getElementById('first-d').value);

    function totalProduction(){
        for (const property in shedProduction){
            console.log(`Your production is shed ${property} ${shedProduction[property]} litres per day`)
        }
    
        for (const x in shedProduction){
            dailyProduction += shedProduction[x];
        }
    
        console.log(`The total production is ${dailyProduction} litres per day`)
    }
    
    // function to calculate income per week(per year)
    
    function incomeOverTime(){
            console.log(`Your weekly income will be ${dailyProduction*week*selling_price}`)
            console.log(`Your yearly income will be ${dailyProduction*year*selling_price}`)
    }
    
    // function to calculate income per month in a leap year
    
    function incomeLeapYear(){
        for(const month in leapYear){
            console.log(`Your income for ${month} is ${leapYear[month]*selling_price*dailyProduction}`)
        }
    }

    totalProduction()
    console.log("")
    incomeOverTime(selling_price, time)
    console.log("")
    incomeLeapYear()
}