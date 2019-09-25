// these are the answers
var answerKey = ["Answer1","Answer2","Answer3"]
 var timeLeft = 3;
  var elem = document.getElementById('timer');

function myFunction() {
    var a = answerKey.indexOf("Answer1");
    document.getElementById("question1").innerHTML = a;
  }
 
  
  // var timerId = setInterval(countdown, 1000);
  
  // function countdown() {
  //   if (timeLeft === 0) {
  //     clearTimeout(timerId);
  //     doSomething();
  //   } else {
  //     elem.innerHTML = timeLeft + ' seconds remaining';
  //     timeLeft--;
  //   }
  // }

 

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
  
  document.getElementById('quizStart').addEventListener('click', e =>{
    e.preventDefault()

    var starter = document.getElementById('quizStart')

    starter.style.display = 'none'

    tableRow = document.createElement('form')
    tableRow.innerHTML =`
    <form id="quiz" >
<div id="box1" class="container">
        <h1>Question 1</h1>
    <div class="row">
     <div class="col"></div>
     <label for="Answer1"><input type="radio" name="question1" value="0" id="Answer1" class="col"/>Answer1.</label>
      <label for="Answer1"><input type="radio" name="question1" value="0" id="Answer1b" class="col"/>Answer2.</label>
      <label for="Answer1"><input type="radio" name="question1" value="0" id="Answer1c" class="col"/>Answer3.</label>
      <label for="Answer1"><input type="radio" name="question1" value="0" id="Answer1d" class="col"/>Answer4.</label>
      <div class="col"></div>
    </div>
  </div>
  <div id="box1" class="container">
    <h1>Question 1</h1>
<div class="row">
 <div class="col"></div>
 <label for="Answer2"><input type="radio" name="question2" value="0" id="Answer2" class="col"/>Answer1.</label>
  <label for="Answer2"><input type="radio" name="question2" value="0" id="Answer2b" class="col"/>Answer2.</label>
  <label for="Answer2"><input type="radio" name="question2" value="0" id="Answer2c" class="col"/>Answer3.</label>
  <label for="Answer2"><input type="radio" name="question2" value="0" id="Answer2d" class="col"/>Answer4.</label>
  <div class="col"></div>
</div>
</div>
<div id="box1" class="container">
  <h1>Question 1</h1>
<div class="row">
<div class="col"></div>
<label for="Answer3"><input type="radio" name="question3" value="0" id="Answer3" class="col"/>Answer1.</label>
<label for="Answer3"><input type="radio" name="question3" value="0" id="Answer3b" class="col"/>Answer2.</label>
<label for="Answer3"><input type="radio" name="question3" value="0" id="Answer3c" class="col"/>Answer3</label>
<label for="Answer3"><input type="radio" name="question3" value="0" id="Answer3d" class="col"/>Answer4.</label>
<div class="col"></div>
</div>
</div>
<div id="box1" class="container">
  <h1>Question 1</h1>
<div class="row">
<div class="col"></div>
<label for="Answer4"><input type="radio" name="question4" value="0" id="Answer4" class="col"/>Answer1.</label>
<label for="Answer4"><input type="radio" name="question4" value="0" id="Answer4b" class="col"/>Answer2.</label>
<label for="Answer4"><input type="radio" name="question4" value="0" id="Answer4c" class="col"/>Answer3</label>
<label for="Answer4"><input type="radio" name="question4" value="0" id="Answer4d" class="col"/>Answer4.</label>
<div class="col"></div>
</div>
</div>
<button type="submit" value="Submit">Submit</button>
</form>
    `
    document.querySelector('.testy').append(tableRow)
  })
  