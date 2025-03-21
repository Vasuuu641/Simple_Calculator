document.addEventListener("DOMContentLoaded", function(){
//Selecting the display
const selectDisplay = document.querySelector('.display');

//Selecting the number
const selectNumber = document.querySelectorAll('.number');

if(!selectDisplay || selectNumber.length === 0){
  console.log("There's been a problem with the code!");
  return;
}

//Function to update display when a number is pressed
updateDisplay = function(){
  selectDisplay.textContent += this.textContent;
}

selectNumber.forEach(function(button) {
  button.addEventListener("click", updateDisplay);
});




});

