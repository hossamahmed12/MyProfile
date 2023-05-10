let years = document.querySelector(".years")
let Months = document.querySelector(".Months");
let Days = document.querySelector(".Days");
let Hours = document.querySelector(".Hours");
let dateNow = new Date();
let birthday = new Date("3 3, 94"); 
// console.log(dateDiff);
// console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);
years.textContent = dateNow.getFullYear() - birthday.getFullYear();
Months.textContent = dateNow.getMonth() - birthday.getMonth();
Days.textContent = dateNow.getDate() - birthday.getDate();
Hours.textContent = dateNow.getHours() - birthday.getHours();
