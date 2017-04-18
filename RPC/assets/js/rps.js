/**
 * This is the javascript that calculates who the winner is
 * @author Gerrit A. Wieberdink
 * @version 1.0.1
 */

// var userChoice = prompt("Do you choose rock, paper or scissors?");

/**
 * Determine the choice of the computer
 *
 * @returns {number}
 */
function computerChoice() {
    var computerChoice = Math.random();
    if (computerChoice < 0.34) { // Rock
        return 1;
    } else if(computerChoice <= 0.67) { // Paper
        return 2;
    } else { // Scissors
        return 3;
    }
}

/**
 * This function determines the winner of the current game
 *
 * @param {number} user The users' choice
 * @param {number} computer The computers' choice
 * @returns {*}
 */
function compare(user, computer){

    var options = {
        1: "Rock",
        2: "Paper",
        3: "Scissors"
    }

    if(user === computer) {
        return "The result is a tie!";
    }
    else if (user === 3 && computer === 1) {
        return "Rock wins over scissors, Computer is the winner";
    }
    else if (user === 1 && computer === 3) {
        return "Rock wins over scissors, You are the winner";
    }
    else if(user < computer) {
        return options[user] + " wins over " + options[computer]+ ", You are the winner";
    }
    else {
        return options[computer] + " wins over " + options[user]+ ", Computer is the winner";
    }
}

/**
 * Display the result based on the users' choice
 * @param {number} userChoice Which button the user choose
 */
function choose(userChoice) {
    document.getElementById("result").innerHTML = compare(userChoice, computerChoice());
}
