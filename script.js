//Contents of Notify-section hidden
document.getElementById("notifyMatch").style.display = "none";
document.getElementById("notifyUnmatch").style.display = "none";

//Pin Generator function-- It will generate a four digit random number
function pinGenerator() {
    document.getElementById("pinNumberInput").value = "";
    // document.getElementById("pinnumberGenerate").value = parseInt(Math.random() * 10000);
    let pinNumber = parseInt(Math.random()*10000);
    //if function to prevent 4 digit numbers with zeros at the beginnin and making them as 3 digit or 2 digit number
    if(pinNumber > 999){
        document.getElementById("pinnumberGenerate").value = pinNumber;
    }
    document.getElementById("pinNumberInput").value = "";
}

//Input Number Function
function inputNumber(number) {
    const beforeNumber = document.getElementById("pinNumberInput").value;
    const afterNumber = beforeNumber + number;
    if(length.afterNumber = 4){
        document.getElementById("pinNumberInput").value = afterNumber;
    }
}

//ClearNumbers Function
function clearNumbers() {
    document.getElementById("pinNumberInput").value = '';
}

//backspaceNumber Function
function backspaceNumber(){
    const presentValue = document.getElementById("pinNumberInput").value;
    if(presentValue != ''){
        document.getElementById("pinNumberInput").value = presentValue.slice(0, -1);
    }
}

//Matching pin numbers -- MatchORNot function
function matchOrNot(){
    const pinGenerator = document.getElementById("pinnumberGenerate").value;
    const inputPin = document.getElementById("pinNumberInput").value;

    if(pinGenerator == inputPin){
        document.getElementById("notifyMatch").style.display="block";
        document.getElementById("notifyUnmatch").style.display = "none";
    }
    else{     
        document.getElementById("notifyUnmatch").style.display="block";
        document.getElementById("notifyMatch").style.display = "none";
    }
}

//actionCount function
function actionCountdown(){
    const actionCount = parseInt(document.getElementById("actionCount").innerText);
    const actionLeft = document.getElementById("actionCount").innerText = actionCount -1;
    if(actionLeft < 1){
      
        document.getElementById("actionCount").innerText = 0;
        document.getElementById("submitBtn").style.display = "none";
    }
   
}

//Try Again-- returnToTry function
function returnToTry(){
    actionCountdown();
    document.getElementById("notifyUnmatch").style.display = "none";
    document.getElementById("pinnumberGenerate").value = "";
    document.getElementById("pinNumberInput").value = "";
   
}