// Enum of Selections
const Selections = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
};
Object.freeze(Selections);

// Enum of Outcomes
const Outcomes = {
    PLAYER_WINS: "player",
    COMPUTER_WINS: "computer",
    TIE: "tie",
};
Object.freeze(Outcomes);


class Round{

    constructor(playerSelection){
        this.playerSelection = playerSelection;
        this.computerSelection = this.getComputerSelection();
    }

    /**
     * get a random computer selection
     * @returns Selections
     */
    getComputerSelection() {
        //*********************************ADD CODE HERE *************************************/
        // Use Math.floor and select a random Selections enumerator from above 
        let random = Math.floor(Math.random() * 3); //Get a random number from 0-2.
        switch (random)
        {
            case 0:
                return Selections.ROCK;
                break;
            case 1:
                return Selections.PAPER;
                break;
            case 2:
                return Selections.SCISSORS;
                 break;

        }
    }

    /**
     * determine the winner of the round
     * @param {*} playerSelection
     * @param {*} computerSelection
     * @returns Outcomes
     */
    determineWinner() {
        //*********************************ADD CODE HERE *************************************/
        // Use this.playerSelection and this.computerSelection to return the appropriate outcome from the Outcomes enumerator above.
        switch (this.playerSelection)
        {
            case "rock":
                if(this.computerSelection === "paper")
                {
                    game.incrementComputerWins();
                    return Outcomes.COMPUTER_WINS;
                } else if(this.computerSelection === "rock")
                {
                    game.incrementCountOfTies();
                    return Outcomes.TIE;
                } else {
                    game.incrementPlayerWins();
                    return Outcomes.PLAYER_WINS;
                }
                break;
            case "paper":
                if(this.computerSelection === "scissors")
                {
                    game.incrementComputerWins();
                    return Outcomes.COMPUTER_WINS;
                } else if(this.computerSelection === "paper")
                {
                    game.incrementCountOfTies();
                    return Outcomes.TIE;
                } else {
                    game.incrementPlayerWins();
                    return Outcomes.PLAYER_WINS;
                }
                break;
            case "scissors":
                if(this.computerSelection === "rock")
                {
                    game.incrementComputerWins();
                    return Outcomes.COMPUTER_WINS;
                } else if(this.computerSelection === "scissors")
                {
                    game.incrementCountOfTies();
                    return Outcomes.TIE;
                } else {
                    game.incrementPlayerWins();
                    return Outcomes.PLAYER_WINS;
                }
                break;
        }
    }



}


//DO NOT TOUCH THIS LINE OF CODE//
let unit_test1 = Round;