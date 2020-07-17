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
  let date = null;

  // All the moments to update what hour you are in for the work day
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
  
  // Puts the current time on at the top of the page
  // Updates the current time by seconds
    date = moment(new Date())
    current.html(date.format("[Today is] dddd"));

  for (let i = 0; i < hours.length; i++) {
    if (m.isBefore(hours[i], "hour") === true) {
      notes[i].css("background", "#77dd77");
    }
    else if (m.isAfter(hours[i], "hour") === true) {
      notes[i].css("background", "#d3d3d3");
    }
    else if (m.isSame(hours[i], "hour") === true) {
      notes[i].css("background", "#ff6961");
    }
  };
  // console.log("Same:", m.isSame(firstHour, "hour"));
  // console.log("After:", m.isAfter(firstHour, "hour"));
  // console.log("Before:", m.isBefore(firstHour, "hour"));


  $(".btn-save").on("click", saveNote);

  function saveNote(){
    let uniqueId = $(this).attr("data");
    let uniqueNote = $(`#note${uniqueId}`).val().trim();
    localStorage.setItem(`save${uniqueId}`, uniqueNote);
  }

  let localNote1 = localStorage.getItem("save1");
  note1.html(localNote1);

  let localNote2 = localStorage.getItem("save2");
  note2.html(localNote2);
  
  let localNote3 = localStorage.getItem("save3");
  note3.html(localNote3);
  
  let localNote4 = localStorage.getItem("save4");
  note4.html(localNote4);
  
  let localNote5 = localStorage.getItem("save5");
  note5.html(localNote5);
  
  let localNote6 = localStorage.getItem("save6");
  note6.html(localNote6);
  
  let localNote7 = localStorage.getItem("save7");
  note7.html(localNote7);
  
  let localNote8 = localStorage.getItem("save8");
  note8.html(localNote8);
  
  let localNote9 = localStorage.getItem("save9");
  note9.html(localNote9);
});