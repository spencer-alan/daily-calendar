$(document).ready(function () {
  // Current date and time holder
  let current = $("#current-date");
  // Grabbing Areas that need to be changed dependent on time
  let note1 = $("#note1");
  let note2 = $("#note2");
  let note3 = $("#note3");
  let note4 = $("#note4");
  let note5 = $("#note5");
  let note6 = $("#note6");
  let note7 = $("#note7");
  let note8 = $("#note8");
  let note9 = $("#note9");
  let notes = [note1, note2, note3, note4, note5, note6, note7, note8, note9];
  
  // Current Date and Time
  const m = moment();
  console.log(m.toString());

  $(current).text(m.format("[Today is] dddd, MMMM Do, YYYY, h:mm a"));
  let firstHour = moment(9, "HH");
  let secondHour = moment(10, "HH");
  let thirdHour = moment(11, "HH");
  let fourthHour = moment(12, "HH");
  let fifthHour = moment(13, "HH");
  let sixthHour = moment(14, "HH");
  let seventhHour = moment(15, "HH");
  let eighthHour = moment(16, "HH");
  let ninthHour = moment(17, "HH");
  let hours = [firstHour, secondHour, thirdHour, fourthHour, fifthHour, sixthHour, seventhHour, eighthHour, ninthHour];
  
  for (let i = 0; i < hours.length; i++) {
    if (m.isBefore(hours[i], "hour") === true) {
      notes[i].css("background", "#b3ffb3");
    }
    else if (m.isAfter(hours[i], "hour") === true) {
      notes[i].css("background", "#cccccc");
    }
    else if (m.isSame(hours[i], "hour") === true) {
      notes[i].css("background", "#668cff");
    }
    console.log(i);
  }
  
  // console.log("Same:", m.isSame(firstHour, "hour"));
  // console.log("After:", m.isAfter(firstHour, "hour"));
  // console.log("Before:", m.isBefore(firstHour, "hour"));
});