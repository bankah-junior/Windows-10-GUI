// Music Folder
const moviesIcon = document.querySelector('.movies-icon-div');
const movies = document.querySelector('.movies-list');
const close = document.querySelector('.close');

moviesIcon.addEventListener('click', () => {
    movies.style.display = 'block';
});

close.addEventListener('click', () => {
    movies.style.display = 'none';
});

// To Do
const toDoIcon = document.querySelector('.to-do-div');
const toDo = document.querySelector('.to-do-display');
const exit = document.querySelector('.exit');

toDoIcon.addEventListener('click', () => {
    toDo.style.display = 'block';
});

exit.addEventListener('click', () => {
    toDo.style.display = 'none';
});

// Time
function showTime(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var day = date.getDate();
    var month1 = date.getMonth();
    var year = date.getFullYear();
    var month = month1 + 1;

    var session = 'AM';
    
    if (hour == 0){
        hour = 12;
    }

    if (hour > 12){
        hour = hour - 12;
        session = "PM";
    }

    // short cut for the condition right below it
    hour = (hour < 10) ? "0" + hour:hour;
    minute = (minute < 10) ? "0" + minute:minute;
    second = (second < 10) ? "0" + second:second;

 

    var time = hour + ":" + minute + " " + session;
    var mineDate = day + "-" + month + "-" + year;

    // insert the time value into the h1#time element
    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = mineDate;

    // call the showTime function every one second
    setTimeout(showTime, 1000);
}

// Random Quotes
var quotes = [
    "Do I love you? My God, if your love were a grain of sand, mine would be a universe of beaches.",
    "I love you right up to the moon and back.",
    "I love you more than I\’ve ever found a way to say to you.",
    "I said I love and tha\t’s forever. And this I promise from the heart I could not love you any better I love you just the way you are.",
    "I love you the way a drowning man loves air. And this would destroy me to have you just a little.",
    "I love you. I knew it the minute I met you. I\’m sorry it took so long for me to catch up. I just got stuck.",
    "For all the things my hands have held, the best by far is you.",
    "You think you are one of a million but you are one in a million to me.",
    "You are the sail of my love boat, you are the captain and crew, you will always be my necessity, I\’d be lost without you.",
    "If I had to dream up the perfect woman, she wouldn\’t even come closer to you.",
    "Your words are my food. Your breath is my wine. You are everything to me.",
    "It\’s like my life isn\’t even real to unless you\’re there and in it.",
    "It was love at first sight, at last sight, at ever and ever sight.",
    "If I could ask god one thing, it would be to stop the moon. Stop the moon and make this night and your beauty last forever."
];

function newQuotes() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quotes').innerHTML = quotes[randomNumber];
};

//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
};

// Volume Controller
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

// Hid e and Show Volume Controller

function showError() {
    alert("404 Not Found")
};

function showDateTime() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var day = date.getDate();
    var month1 = date.getMonth();
    var year = date.getFullYear();
    var month = month1 + 1;

    var session = 'AM';
    
    if (hour == 0){
        hour = 12;
    }

    if (hour > 12){
        hour = hour - 12;
        session = "PM";
    }

    // short cut for the condition right below it
    hour = (hour < 10) ? "0" + hour:hour;
    minute = (minute < 10) ? "0" + minute:minute;
    second = (second < 10) ? "0" + second:second;

 

    var time = hour + ":" + minute + " " + session;
    var mineDate = day + "-" + month + "-" + year;

    
    alert("Time is " + time + "\n" + "Date is " + mineDate);
};