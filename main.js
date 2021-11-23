let guideImage = document.getElementById("guideImage");
let guideText = document.getElementById("guideText");
let headerText = document.getElementById("headertitle");

function stepOne(){
  headerText.innerHTML = "Step 1: Jack Car Up"
  guideImage.src ="step1image.jpg"
  guideText.innerHTML = "step 1 text"
  
}
function stepTwo(){
  headerText.innerHTML = "Step 2: Take Off Lug Nuts"
  guideImage.src ="step2image.jpg"
  guideText.innerHTML = "step 2 text"
}

function stepThree(){
  headerText.innerHTML = "Step 3: Remove Tire"
  guideImage.src ="step3image.jpg"
  guideText.innerHTML = "step 3 text"
}

function stepFour(){
  headerText.innerHTML = "Step 4: Put New Tire On"
  guideImage.src ="step4image.jpg"
  guideText.innerHTML = "step 4 text"
}

function stepFive(){
  headerText.innerHTML = "Step 5: Tighten Lug Nuts"
  guideImage.src ="step5image.jpg"
  guideText.innerHTML = "step 5 text"
}

function stepSix(){
  headerText.innerHTML = "Step 6: Lower Car To Ground"
  guideImage.src ="step6image.jpg"
  guideText.innerHTML = "step 6 text"
}

function stepQuiz(){
  headerText.innerHTML = "Recap Quiz"
  guideText.innerHTML = "work in progress......."
}