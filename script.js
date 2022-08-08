const numbers = [0,1,2,3,4,5,6,7,8,9]
var currentVal = 0
var decFlag = false


function typeNumber(number){
     if(decFlag == true){
          currentVal = number * 0.1
          decFlag = false;
     }
     else if (currentVal == 0){
          currentVal = number
     }
     else{
          if(currentVal.toString().length < 13){
               currentVal += number.toString()
          }
     }
     document.getElementById("screen").textContent = currentVal
}

function delNumber(){
     if(currentVal != 0){
          if(currentVal.length > 1){
               currentVal = currentVal.slice(0, currentVal.length - 1)
          }
          else{
               currentVal = 0
          }
     }
     document.getElementById("screen").textContent = currentVal
}

function addOperation(){
     if(
        currentVal[currentVal.length-1] != "+" &&
        currentVal[currentVal.length-1] != "-" &&
        currentVal[currentVal.length-1] != "/" &&
        currentVal[currentVal.length-1] != "x" &&
        currentVal[currentVal.length-1] != ".")
     {
          if(currentVal.toString().length < 12){
               currentVal = currentVal.toString() + "+"
          }

     }
     document.getElementById("screen").textContent = currentVal
}

function subOperation(){
     if(
        currentVal[currentVal.length-1] != "+" &&
        currentVal[currentVal.length-1] != "-" &&
        currentVal[currentVal.length-1] != "/" &&
        currentVal[currentVal.length-1] != "x" &&
        currentVal[currentVal.length-1] != ".")
     {
          if(currentVal.toString().length < 12){
               currentVal = currentVal.toString() + "-"
          }

     }
     document.getElementById("screen").textContent = currentVal
}

function mulOperation(){
     if(
     currentVal[currentVal.length-1] != "+" &&
     currentVal[currentVal.length-1] != "-" &&
     currentVal[currentVal.length-1] != "/" &&
     currentVal[currentVal.length-1] != "x" &&
     currentVal[currentVal.length-1] != ".")
     {
          if(currentVal.toString().length < 12){
               currentVal = currentVal.toString() + "x"
          }

     }
     document.getElementById("screen").textContent = currentVal
}

function divOperation(){
     if(
     currentVal[currentVal.length-1] != "+" &&
     currentVal[currentVal.length-1] != "-" &&
     currentVal[currentVal.length-1] != "/" &&
     currentVal[currentVal.length-1] != "x" &&
     currentVal[currentVal.length-1] != ".")
     {
          if(currentVal.toString().length < 12){
               currentVal = currentVal.toString() + "/"
          }

     }
     document.getElementById("screen").textContent = currentVal
}

function reset(){
     result = 0;
     currentVal = 0;
     document.getElementById("screen").textContent = currentVal
}

function dotButton(){
     if(currentVal == 0){
          document.getElementById("screen").textContent = "0."
          decFlag = true
     }
     else if(!currentVal.toString().includes("+") &&
             !currentVal.toString().includes("-") &&
             !currentVal.toString().includes("/") &&
             !currentVal.toString().includes("x") )
             {
          if(!currentVal.toString().includes(".")){
               currentVal = currentVal.toString() + "."
               document.getElementById("screen").textContent = currentVal
          }
     }
     else{
          var num = ''
          var i = 0
          var flag = false
          while(!flag){ 
               if(currentVal[currentVal.length-1-i] == "+"){
                    flag = true
               }
               else if(currentVal[currentVal.length-1-i] == "-"){
                    flag = true
               }
               else if(currentVal[currentVal.length-1-i] == "/"){
                    flag = true
               }
               else if(currentVal[currentVal.length-1-i] == "x"){
                    flag = true
               }
               else{
                    num = num.toString() + currentVal[currentVal.length-1-i].toString()
               }
               i++
               console.log(num)
          }
          if(!num.toString().includes(".")){
               currentVal = currentVal.toString() + "."
               document.getElementById("screen").textContent = currentVal
          }
     }
}
     
function eqOperation(){
          if(currentVal.toString().includes("+") || currentVal.includes("-") || currentVal.includes("/") || currentVal.includes("x")){
               var replaced = currentVal.replace('x', '*')
               replaced = eval(replaced)
               currentVal = replaced
               document.getElementById("screen").textContent = currentVal.toString().slice(0,13)
          }          
}