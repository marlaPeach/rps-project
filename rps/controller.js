var game = new Game();
let numberOfRounds = 0;


// main entry point
function playGame() {
    //*********************************ADD CODE HERE *************************************/
    // Call the function game.newGame() to reset the counts.
    
    game.newGame() //to reset the counts.

    //*********************************ADD CODE HERE *************************************/
    // Get the number of rounds from the user, and store it in a variable called numberOfRounds.
    // Use game.IsNumerOfRoundsValid() to validate the user input.
    // If the input is valid, use game.setNumberOfRounds(numberOfRounds) to set the number of rounds for the game 
    //  >> Else, try to get the number of rounds for the suer again
    numberOfRounds = window.prompt("Please enter the number of rounds you'd like to play."); //Prompt for user input.
    numberOfRounds = parseInt(numberOfRounds, 10); //Cast string to integer.
    //If statement for validation check.
    if(game.isNumberOfRoundsValid(numberOfRounds))
    {
        game.setNumberOfRounds(numberOfRounds);
    }
    else {
        numberOfRounds = window.prompt("Sorry, that value is invalid. Please enter a number from 1-5."); //Prompt for user input again.
        numberOfRounds = parseInt(numberOfRounds, 10); //Cast string to integer.
        if (game.isNumberOfRoundsValid(numberOfRounds))
        {
            game.setNumberOfRounds(numberOfRounds);
        } else {
            window.alert("Invalid value. Game Over!");
            console.log("Game Over!");
        }
    }

    //*********************************ADD CODE HERE *************************************/
    // Call playRound() with a parameter of the round count (1 thru numberOfRounds) for each round 
    for(var i = 1; i <= numberOfRounds; i++) {
        playRound(i);
        var currentRound = numberOfRounds;
        currentRound =- 1;
    }


    //*********************************ADD CODE HERE *************************************/
    // Display the Final Score from the properties stored in the Game object
    console.log(`Rounds played: ${game.numberOfRounds}    Ties: ${game.countOfTies}`)
    console.log(`Player Final Score: ${game.countOfPlayerWins}   Computer Final Score: ${game.countOfComputerWins}`);
    if(game.countOfPlayerWins > game.countOfComputerWins)
    {
        console.log("Player Wins!");
    } else if (game.countOfComputerWins > game.countOfPlayerWins)
    {
        console.log("Computer Wins!");
    } else 
    {
        console.log("Ties all around.");
    }

}

/**
 * play a round of rock paper scissors
 * @param {*} roundNumber
 */
function playRound(roundNumber) {
    //*********************************ADD CODE HERE *************************************/
    // Display the Current Score to the User
    console.log(`Current Round: ${roundNumber}`)
    console.log(`Player Score: ${game.countOfPlayerWins}   Computer Score: ${game.countOfComputerWins}`);
    //Prompt for Player Selection
    var playerSelection = getPlayerSelection();
    var round = new Round(playerSelection);

    //Play the Round
    var outcome = round.determineWinner();
    switch (outcome)
    {
        case "player":
            game.incrementPlayerWins();
            break;
        case "computer":
            game.incrementComputerWins();
        case "tie":
            game.incrementCountOfTies();
    }
    //*********************************ADD CODE HERE *************************************/
    // Display the Round Results from the properties stored in the Round object
    console.log(`Player Chose: ${playerSelection}   Computer Chose: ${round.computerSelection}`);
    console.log(`Winner is: ${outcome}`);

}


/**
 * prompt the user to get a selection
 * @returns Selections
 */
function getPlayerSelection() {
    
    //*********************************ADD CODE HERE *************************************/
    // Prompt, Validate and Return the player selection. This must be in the form of "rock", "paper", or "scissors" exactly
    let userInput = window.prompt("Please choose: rock, paper, or scissors.").toLowerCase();
    switch (userInput)
    {
        case "rock":
            return userInput;
            break;
        case "paper":
            return userInput;
            break;
        case "scissors":
            return userInput;
            break;
        default:
            console.log(`Invalid value ${userInput}. Default value "rock" was given to Player.`);
            return "rock";
    }
}