// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");



document.getElementById('btn').addEventListener('click', 

function setTime() {
  // Sets interval in variable
  sendMessage();

  var secondsLeft = 5;
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = 'Time: '+ secondsLeft;
    
    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      
    } return;

  }, 1000);
}
)
// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "./assets/img/04-web-apis-homework-demo.gif");
  mainEl.appendChild(imgEl);

}

