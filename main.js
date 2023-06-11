const allInputs = document.querySelectorAll(".input");
const inputDay = document.querySelector("#input-day")
const inputMonth = document.querySelector("#input-month")
const inputYear = document.querySelector("#input-year")

// we are going to target the spans now 
const spanYear = document.querySelector("#span-year")
const spanMonth = document.querySelector("#span-month")
const spanDay = document.querySelector("#span-day")

// first get the present date using the javascript Date object.

const presentTime = new Date();

// get the present day
const presentDay = presentTime.getDate();
// get the present month
const presentMonth = presentTime.getMonth();
// get the present year.
const presentYear = presentTime.getYear();

// write event listener that runs a function when input chagnes

function getDateDifferenceage(){
    const dayValue = Number(inputDay.value);
    const monthValue = Number(inputMonth.value);
    const yearValue = Number(inputYear.value);

    // difference between present year and birth year.
    const diffYear =  yearValue - presentYear;
    const diffMonth =  monthValue - presentMonth;
    const diffDay =  dayValue - presentDay;



    // console.log(`day:${dayValue}, month:${monthValue}, Year:${yearValue}`)
    // console.log(dayValue, monthValue, yearValue)
    console.log(typeof(yearValue));
};

 


// let us use a for loop to go through all the contents of the allInputs array.
for (let i =0 ; i < allInputs.length; i++){
    allInputs[i].addEventListener("input",getDateDifferenceage);
}