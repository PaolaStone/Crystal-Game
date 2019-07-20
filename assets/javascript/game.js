$(document).ready(function(){
 
// Generate random number
function generateRandomNumber (){
    generatedNumber = (Math.floor(Math.random() * (120 - 19 + 1)) + 19 );
    $("#randomNumber").text(generatedNumber);

}

generateRandomNumber ();

var crystalRandom = [];
var wins = 0;
var losses = 0;
var counter = 0;


// Generate 4 random values and save them to array
function generateCrystalNumbers (){
    for (i= 0; i < 4; i++){
        crystalRandom[i] = (Math.floor(Math.random() * (12 - 1 + 1)) + 1 );
        $(console.log(crystalRandom[i]))
   }
}

generateCrystalNumbers();

// Assing random values to each cryatal
function assignCrystalsValues (){

    var crystal1 = $("#crystal1");
    crystal1.attr("data-crystalvalue", crystalRandom[0]);
    // $(console.log(crystal1))
    
    var crystal2 = $("#crystal2");
    crystal2.attr("data-crystalvalue", crystalRandom[1]);
    // $(console.log(crystal2))
    
    var crystal3 = $("#crystal3");
    crystal3.attr("data-crystalvalue", crystalRandom[2]);
    // $(console.log(crystal3))
    
    
    var crystal4 = $("#crystal4");
    crystal4.attr("data-crystalvalue", crystalRandom[3]);
    // $(console.log(crystal4))
}
    
assignCrystalsValues();

//Clear all values
function start(){
    var crystalRandom = [];
    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;
    counter = 0;
}

start ();

// $(console.log(crystalRandom))

$(".btn").on("click",function() {
    
    $("#message").text(" ");
    
    $("#yourScore").text("Your total score is:");

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;
    // $(console.log(counter));
  
    $("#userNumber").text(counter);

    if (counter === generatedNumber) {
        $("#userNumber").text(" ");
        $("#yourScore").text(" ");
        $("#message").text("You won! Try to match the new number");
        wins++
        generateRandomNumber();
        start();
        generateCrystalNumbers();
        assignCrystalsValues();
       
    }
    
    else if ( counter >= generatedNumber) {
        $("#userNumber").text(" ");
        $("#yourScore").text(" ");
        $("#message").text("You lose! Try to match the new number");
        losses++
        generateRandomNumber();
        start();
        generateCrystalNumbers();
        assignCrystalsValues();
        
    }

    $("#loss").text(losses);
    $("#win").text(wins);

  
 });
});
