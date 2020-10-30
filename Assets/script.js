/* Have moment.js intergrated into file
Have date and time show underneath heading
Have a schedule of 8am to 5pm show for the day.
For each hour, have a textarea for which you can add your task, along with a save button.
Past hours show a color; current hour shows another; and future hours show another.
Data is saved to local storage and displayed after refresh.
For textarea, input text into textarea. Once submit is clicked. text is setitem  and also getitem to localstorage
For each timeblock have time be the key and value be the task inserted into textarea
*/

//Display Time  Needs
let dateDisplay = document.querySelector("#currentDay");

//Current Time
let m = moment();
let time = m.toString();

let dateFormat = m.format("[Today is] dddd[,] MMM Mo YYYY");
dateDisplay.textContent = dateFormat;

/*Timeblock background changes depending on time of the day 
Past = grey
Present = Green
Future = Red */

//Timeblock for 8 am
const text8 = document.querySelector("#textarea8");

let timeFormat = m.format("YYYY[-]MM[-]DD H[:]m[:]s");
let same8 = moment(timeFormat).isSame("2020-10-30 08:35:32", "hour");
let before8 = moment(timeFormat).isBefore("2020-10-30 08:35:32", "hour");
let after8 = moment(timeFormat).isAfter("2020-10-30 08:35:32", "hour");

if (same8) {
  text8.classList.add("present");
}
if (before8) {
  text8.classList.add("future");
}
if (after8) {
  text8.classList.add("past");
}
//Timeblock for 9 am
const text9 = document.querySelector("#textarea9");
let same9 = moment(timeFormat).isSame("2020-10-30 09:35:32", "hour");
let before9 = moment(timeFormat).isBefore("2020-10-30 09:35:32", "hour");
let after9 = moment(timeFormat).isAfter("2020-10-30 09:35:32", "hour");

if (same9) {
  text9.classList.add("present");
}
if (before9) {
  text9.classList.add("future");
}
if (after9) {
  text9.classList.add("past");
}
//Timeblock for 10 am
const text10 = document.querySelector("#textarea10");
let same10 = moment(timeFormat).isSame("2020-10-30 10:35:32", "hour");
let before10 = moment(timeFormat).isBefore("2020-10-30 10:35:32", "hour");
let after10 = moment(timeFormat).isAfter("2020-10-30 10:35:32", "hour");

if (same10) {
  text10.classList.add("present");
}
if (before10) {
  text10.classList.add("future");
}
if (after10) {
  text10.classList.add("past");
}
//Timeblock for 11 am
const text11 = document.querySelector("#textarea11");
let same11 = moment(timeFormat).isSame("2020-10-30 11:35:32", "hour");
let before11 = moment(timeFormat).isBefore("2020-10-30 11:35:32", "hour");
let after11 = moment(timeFormat).isAfter("2020-10-30 11:35:32", "hour");

if (same11) {
  text11.classList.add("present");
}
if (before11) {
  text11.classList.add("future");
}
if (after11) {
  text11.classList.add("past");
}
//Timeblock for 12 pm
const text12 = document.querySelector("#textarea12");
let same12 = moment(timeFormat).isSame("2020-10-30 12:35:32", "hour");
let before12 = moment(timeFormat).isBefore("2020-10-30 12:35:32", "hour");
let after12 = moment(timeFormat).isAfter("2020-10-30 12:35:32", "hour");

if (same12) {
  text12.classList.add("present");
}
if (before12) {
  text12.classList.add("future");
}
if (after12) {
  text12.classList.add("past");
}
//Timeblock for 1 pm
const text1 = document.querySelector("#textarea1");
let same1 = moment(timeFormat).isSame("2020-10-30 13:35:32", "hour");
let before1 = moment(timeFormat).isBefore("2020-10-30 13:35:32", "hour");
let after1 = moment(timeFormat).isAfter("2020-10-30 13:35:32", "hour");

if (same1) {
  text1.classList.add("present");
}
if (before1) {
  text1.classList.add("future");
}
if (after1) {
  text1.classList.add("past");
}
//Timeblock for 2 pm
const text2 = document.querySelector("#textarea2");
let same2 = moment(timeFormat).isSame("2020-10-30 14:35:32", "hour");
let before2 = moment(timeFormat).isBefore("2020-10-30 14:35:32", "hour");
let after2 = moment(timeFormat).isAfter("2020-10-30 14:35:32", "hour");

if (same2) {
  text2.classList.add("present");
}
if (before2) {
  text2.classList.add("future");
}
if (after2) {
  text2.classList.add("past");
}
//Timeblock for 3 pm
const text3 = document.querySelector("#textarea3");
let same3 = moment(timeFormat).isSame("2020-10-30 15:35:32", "hour");
let before3 = moment(timeFormat).isBefore("2020-10-30 15:35:32", "hour");
let after3 = moment(timeFormat).isAfter("2020-10-30 15:35:32", "hour");

if (same3) {
  text3.classList.add("present");
}
if (before3) {
  text3.classList.add("future");
}
if (after3) {
  text3.classList.add("past");
}
//Timeblock for 4 pm
const text4 = document.querySelector("#textarea4");
let same4 = moment(timeFormat).isSame("2020-10-30 16:35:32", "hour");
let before4 = moment(timeFormat).isBefore("2020-10-30 16:35:32", "hour");
let after4 = moment(timeFormat).isAfter("2020-10-30 16:35:32", "hour");

if (same4) {
  text4.classList.add("present");
}
if (before4) {
  text4.classList.add("future");
}
if (after3) {
  text4.classList.add("past");
}
/*For present, past, future, 
 Same- Create a function where currenttime "isSame" to timeblock hour
 When both are equal, console.log to see if its true. If true, then have background color be blue
 For past, Create a function where currenter is 
 */

saveBtn8.addEventListener("click", function () {
  localStorage.setItem("8:00", text8.nodeValue());
});