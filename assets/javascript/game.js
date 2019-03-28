
    var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var wins = 0;
    var losses = 0;
    

    var directionsText = document.getElementById("directions-text");
    var userChoiceText = document.getElementById("userchoice-text");
    var computerChoiceText = document.getElementById("computerchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
     

document.onkeyup = function(event) {
    var userEntry = event.key;
   
    var computer = letter[Math.floor(Math.random() * letter.length)];
    console.log(computer);

    
     if (userEntry === computer) {
        wins++;

    } else {
      losses++;
      }

      directionsText.textContent = "";

        userChoiceText.textContent = "You chose: " + userEntry;
        computerChoiceText.textContent = "The computer chose: " + computer;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        

//    for (i = 0; i < computer.length; i++){
//         if (computer[i].charAt(0)){
//             console.log(computer[i].charAt(i));
//         }
//     }


    










}