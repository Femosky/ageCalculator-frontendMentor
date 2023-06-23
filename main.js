const allInputs = document.querySelectorAll(".input");
const inputDay = document.querySelector("#input-day");
const inputMonth = document.querySelector("#input-month");
const inputYear = document.querySelector("#input-year");

// we are going to target the spans now
const spanYear = document.querySelector("#span-year");
const spanMonth = document.querySelector("#span-month");
const spanDay = document.querySelector("#span-day");

// getting the birthdate.

// first get the present date using the javascript Date object.
const presentTime = new Date();

// get the present day
const presentDay = presentTime.getDate();
// get the present month
const presentMonth = presentTime.getMonth();
// get the present year.
const presentYear = presentTime.getFullYear();

// write event listener that runs a function when input changes.

function getDateDifferenceAge() {
  const dayValue = Number(inputDay.value);
  const monthValue = Number(inputMonth.value);
  const yearValue = Number(inputYear.value);

  const birthDate = new Date(yearValue, monthValue - 1, dayValue);

  // difference between present year and birth year.
  const diffYear = presentYear - yearValue;
  const diffMonth = presentMonth - monthValue;
  const diffDay = presentDay - dayValue;

  if (
    diffMonth < 0 ||
    (diffMonth === 0 && presentTime.getDate() < birthDate.getDate())
  ) {
    diffYear--;
    diffMonth += 12;
  }
  if (diffDay < 0) {
    diffMonth--;
    const prevMonth = new Date(
      presentTime.getFullYear(),
      presentTime.getMonth() - 1,
      0
    );
    console.log(prevMonth.getDate());
    diffDay += prevMonth.getDate();
  }

  spanYear.innerHTML = diffYear;
  spanMonth.innerHTML = diffMonth;
  spanDay.innerHTML = diffDay;
}

// let us use a for loop to go through all the contents of the allInputs array.
for (let i = 0; i < allInputs.length; i++) {
  allInputs[i].addEventListener("input", getDateDifferenceAge);
}
