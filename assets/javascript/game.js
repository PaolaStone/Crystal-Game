$(document).ready(function(){
 generatedNumber = (Math.floor(Math.random() * (120 - 19 + 1)) + 19 );
    $("#randomNumber").text(generatedNumber);

var scoreCounter = 0;
var crystalVal = [];
var crytals = [];

function generateCrystalNumbers (){
    for (i= 0; i < 4; i++){
        crystalVal[i] = (Math.floor(Math.random() * (12 - 1 + 1)) + 1 );
        $(console.log(crystalVal[i]))
       
    }
}

generateCrystalNumbers();
$(console.log(crystalVal))


$("button").click(function(){
$(console.log(this.id))

stringTemp.slice(-1);
        
    });

   
});








