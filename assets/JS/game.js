// these are the answers
var answerKey = ["Answer1","Answer2","Answer3"]
 var timeLeft = 3;
  var elem = document.getElementById('timer');
document.getElementById("quiz").style.display === 'none'

function myFunction() {
    var a = answerKey.indexOf("Answer1");
    document.getElementById("question1").innerHTML = a;
  }
 
  
  var timerId = setInterval(countdown, 1000);
  
  function countdown() {
    if (timeLeft === 0) {
      clearTimeout(timerId);
      doSomething();
    } else {
      elem.innerHTML = timeLeft + ' seconds remaining';
      timeLeft--;
    }
  }

 

  // this creates a button
  function myButton() {
    var btn = document.createElement("BUTTON");
    
    document.body.appendChild(btn);
  }

  function startoElQuizo() {
    var x = document.getElementById("quiz");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
  // once the last button has been pressed it splits into to buttons
  // click the most buttons to get to a high score
  