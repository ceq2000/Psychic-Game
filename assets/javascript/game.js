var game = ["crab", "shrimp", "krill", "barnacle", "prawn"] //Word list
var currentWord = Math.floor((Math.random() * game.length));  //Initial value of word list
var current_blank = getBlank(game[currentWord]);
document.getElementById("paste_game").innerHTML = replaceChar(game[currentWord]);
var count = 0;
var rand = game[Math.floor(Math.random() * game.length)];

Array.prototype.sample = function () {
    return game[Math.floor(Math.random() * game.length)];
}

function getBlank(word) {
    // var reload = ["Crab", "Shrimp", "Krill", "Barnacle", "Prawn"][Math.floor(Math.random() * 5)];
    var numchars = word.length;
    var randomchar = Math.floor((Math.random() * numchars));
    var chosenchar = word.charAt(randomchar);
    return chosenchar;
}

function replaceChar(word) {
    var newWord = word.replace(current_blank, "_");
    return newWord;
}

function guessChar() {
    var char = document.getElementById("guess").value;

    if (char == current_blank) {
        document.getElementById("feedback").innerHTML = "Correct, the missing blank is >>" + char + "<<";
        document.getElementById("paste_game").innerHTML = game[currentWord];
        setTimeout(function () {
            currentWord++;
            current_blank = getBlank(game[currentWord]);
            document.getElementById("paste_game").innerHTML = replaceChar(game[currentWord]);
        }, 2000);
    }
    else if (char != current_blank) {
        if (count < 2) {
            document.getElementById("feedback").innerHTML = ">>>Sorry, try again!<<<";
            // reset only works with forms, form breaks code
            //document.getElementById("form").reset();
            count++;
            document.getElementById("attempts").innerHTML = count;
        }
        else {
            document.getElementById("feedback").innerHTML = ">>>Sorry, you've tried too often!<<<";
            count++;
            document.getElementById("attempts").innerHTML = count;
            document.getElementById("feedback").innerHTML = ">>>Sorry, you've tried too often!<<<";
            window.location.reload(newGame)
        }
    }
    else {
        alert("ERROR");
    }

}
function newGame() {
    window.location.reload();
}
// function newGame() {
//     window.location.reload();
// }


/* alert("You have 10 guesses. Guess 1-10");
var answer = 3
var guess;
for (i = 0; i < 10; i++) {
    guess = prompt("What's Your Guess?");
    if (answer == guess) {
        alert("You Guessed Correctly");
        break;
    } else {
        guess = prompt("Please Try Again")
    }
}*/


// random value generated 
// var y = Math.floor(Math.random() * 10 + 1);

// counting the number of guesses 
// made for correct Guess 
// var guess = 1;

// document.getElementById("submitguess").onclick = function () {

//     // number guessed by user      
//     var x = document.getElementById("guessField").value;

//     if (x == y) {
//         alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
//             + guess + " GUESS ");
//     }
//     else if (x > y) /* if guessed number is greater 
//                    than actual number*/ {
//         guess++;
//         alert("OOPS SORRY!! TRY A SMALLER NUMBER");
//     }
//     else {
//         guess++;
//         alert("OOPS SORRY!! TRY A GREATER NUMBER")
//     }
// }