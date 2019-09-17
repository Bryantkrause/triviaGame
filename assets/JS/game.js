// these are the answers
let answerKey = ["Answer1","Answer2","Answer3"]

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


  psuedo
  // once the last button has been pressed it splits into to buttons
  // click the most buttons to get to a high score
  