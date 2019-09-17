// these are the answers
var answerKey = ["Answer1","Answer2","Answer3"]

function myFunction() {
    var a = answerKey.indexOf("Answer1");
    document.getElementById("question1").innerHTML = a;
  }

  var timeLeft = 3;
  var elem = document.getElementById('some_div');
  
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

  // on click make a box

  var boxinator = function boxy() {


  }

  // this creates a button
  function myButton() {
    var btn = document.createElement("BUTTON");
    
    document.body.appendChild(btn);
  }


  psuedo
  // once the last button has been pressed it splits into to buttons
  // click the most buttons to get to a high score
  