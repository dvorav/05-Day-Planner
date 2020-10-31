//Current Time
let m = moment();
//Convert time to string
let time = m.toString();
// Change format to Day of week/ Month/ Day/ Year
let dateFormat = m.format("[Today is] dddd[,] MMM Mo YYYY");
$("#currentDay").text(dateFormat);

/*Timeblock background changes depending on time of the day 
Past = grey
Present = Green
Future = Red */

//Date Format
let timeFormat = m.format("YYYY[-]MM[-]DD H[:]m[:]s");

//Timeblock for 8 am
const text8 = document.querySelector("#textarea8");
//Current time "isSame"/equal to the hour time
let same8 = moment(timeFormat).isSame("2020-10-30 08:35:32", "hour");
//Current time "isBefore" to the hour time
let before8 = moment(timeFormat).isBefore("2020-10-30 08:35:32", "hour");
//Current time "isAfter" to the hour time
let after8 = moment(timeFormat).isAfter("2020-10-30 08:35:32", "hour");
//If same8 is true; Show present css class
if (same8) {
  text8.classList.add("present");
}
//If before8 is true; Show future css class
if (before8) {
  text8.classList.add("future");
}
//If after8 is true; Shoe past css class
if (after8) {
  text8.classList.add("past");
}

//Same functionality for other hours

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

//Submit Button 8
$("#saveBtn8").on("click", function () {
  //What ever is inputed into textarea will be sent to localstorage once submit is clicked.
  let text8Value = $("#textarea8").val();

  localStorage.setItem("eight", text8Value);
  let output8 = localStorage.getItem("eight");
  $("#textarea8").text(output8);
});
//Submit Button gets value from localstorage and displays it on textarea element
$("#textarea8").text(localStorage.eight);

//Same functionality for other submit buttons

//Submit Button 9
$("#saveBtn9").on("click", function () {
  let text9Value = $("#textarea9").val();

  localStorage.setItem("nine", text9Value);
  let output9 = localStorage.getItem("nine");
  $("#textarea9").text(output9);
});
$("#textarea9").text(localStorage.nine);

//Submit Button 10
$("#saveBtn10").on("click", function () {
  let text10Value = $("#textarea10").val();

  localStorage.setItem("ten", text10Value);
  let output10 = localStorage.getItem("ten");
  $("#textarea10").text(output10);
});
$("#textarea10").text(localStorage.ten);

//Submit Button 11
$("#saveBtn11").on("click", function () {
  let text11Value = $("#textarea11").val();

  localStorage.setItem("eleven", text11Value);
  let output11 = localStorage.getItem("eleven");
  $("#textarea11").text(output11);
});
$("#textarea11").text(localStorage.eleven);

//Submit Button 12
$("#saveBtn12").on("click", function () {
  let text12Value = $("#textarea12").val();

  localStorage.setItem("twelve", text12Value);
  let output12 = localStorage.getItem("twelve");
  $("#textarea12").text(output12);
});
$("#textarea12").text(localStorage.twelve);

//Submit Button 1
$("#saveBtn1").on("click", function () {
  let text1Value = $("#textarea1").val();

  localStorage.setItem("one", text1Value);
  let output1 = localStorage.getItem("one");
  $("#textarea1").text(output1);
});
$("#textarea1").text(localStorage.one);

//Submit Button 2
$("#saveBtn2").on("click", function () {
  let text2Value = $("#textarea2").val();

  localStorage.setItem("two", text2Value);
  let output2 = localStorage.getItem("two");
  $("#textarea2").text(output2);
});
$("#textarea2").text(localStorage.two);

//Submit Button 3
$("#saveBtn3").on("click", function () {
  let text3Value = $("#textarea3").val();

  localStorage.setItem("three", text3Value);
  let output3 = localStorage.getItem("three");
  $("#textarea3").text(output3);
});
$("#textarea3").text(localStorage.three);

//Submit Button 4
$("#saveBtn4").on("click", function () {
  let text4Value = $("#textarea4").val();

  localStorage.setItem("four", text4Value);
  let output4 = localStorage.getItem("four");
  $("#textarea4").text(output4);
});
$("#textarea4").text(localStorage.four);



//Clears local storage once clear button is clicked..
$("#clear").on("click", function () {
  localStorage.clear();
});
