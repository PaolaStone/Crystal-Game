$(document).ready(function(){
 generatedNumber = (Math.floor(Math.random() * (120 - 19 + 1)) + 19 );
    $("#randomNumber").text(generatedNumber);

var  counter = 0;
var crystalRandom = [];
var crystal1 = 0;
// // var crystal2 = 0;
// // var crystal3 = 0;
// // var crystal4 = 0;

function generateCrystalNumbers (){
    for (i= 0; i < 4; i++){
        crystalRandom[i] = (Math.floor(Math.random() * (12 - 1 + 1)) + 1 );
        $(console.log(crystalRandom[i]))
                     
    }

}

generateCrystalNumbers();

$(console.log(crystalRandom))

var crystal1 = $("#crystal1");
crystal1.attr("data-crystalvalue", crystalRandom[0]);
$(console.log(crystal1))

var crystal2 = $("#crystal2");
crystal2.attr("data-crystalvalue", crystalRandom[1]);
$(console.log(crystal2))

var crystal3 = $("#crystal3");
crystal3.attr("data-crystalvalue", crystalRandom[2]);
$(console.log(crystal3))


var crystal4 = $("#crystal4");
crystal4.attr("data-crystalvalue", crystalRandom[3]);
$(console.log(crystal4))



$(".btn").on("click",function() {
    $(console.log(counter))
    // $(console.log(crystalValue))
    var crystalValue = ($(this).attr("data-crystalvalue"));
    $(console.log(crystalValue = parseInt(crystalValue)));

    

});




});
