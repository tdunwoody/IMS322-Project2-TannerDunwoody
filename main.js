let guideImage = document.getElementById("guideImage");
let guideText = document.getElementById("guideText");
let headerText = document.getElementById("headertitle");

function stepOne(){
  headerText.innerHTML = "Step 1: Jack Car Up"
  guideImage.src ="step1image.jpg"
  guideText.innerHTML = "Use the car jack to lift the car using the jacking point nearest the disabled wheel so that the weight of the car is on the jack but the tire is still in contact with the road. Your car’s owner’s manual will give you all the information you need about where to jack up the car."
  
}
function stepTwo(){
  headerText.innerHTML = "Step 2: Take Off Lug Nuts"
  guideImage.src ="step2image.jpg"
  guideText.innerHTML = " With the tire still in contact with the road begin loosening the lug nuts (turn counterclockwise) but don’t remove them. then jack the car up further until the tire is no longer in contact with the road and remove the lug nuts completely."
}

function stepThree(){
  headerText.innerHTML = "Step 3: Remove Tire"
  guideImage.src ="step3image.jpg"
  guideText.innerHTML = "Take off the tire and wheel assembly and put it to the side, or place your tire back into the spare tire location."
}

function stepFour(){
  headerText.innerHTML = "Step 4: Put New Tire On"
  guideImage.src ="step4image.jpg"
  guideText.innerHTML = "Retrieve your spare tire (usually stored in trunk, or underneath vehicle) and match the holes of the new wheel with the stud bolts on the car and and set the wheel on the studs."
}

function stepFive(){
  headerText.innerHTML = "Step 5: Tighten Lug Nuts"
  guideImage.src ="step5image.jpg"
  guideText.innerHTML = "Hand-tighten the lug nuts (turn clockwise) so that they are firm but not fully tightened, then lower the car so the tire is touching the ground (the car’s weight should remain on the jack). Tighten the lug nuts further using a star pattern (around the wheel, skipping every other lug) to ensure that they are tightened evenly around the wheel."
}

function stepSix(){
  headerText.innerHTML = "Step 6: Lower Car To Ground"
  guideImage.src ="step6image.jpg"
  guideText.innerHTML = "Lower the car all the way onto the ground and remove the car jack. Make sure that the lug nuts are as tight as possible"
}

function stepQuiz(){
  headerText.innerHTML = "Recap Quiz"
  guideImage.src ="recappicture.png"
  
}