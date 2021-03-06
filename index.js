function game(){
    
    let playerScore = 0; // store scores
    let computerScore = 0;
    
    const rock = document.querySelector("#rock").innerHTML;
    const paper = document.querySelector("#paper").innerHTML;
    const scissors = document.querySelector("#scissors").innerHTML;
    const gameResults = document.querySelector("div"); // div container for diplaying results
    const scoreKeeper = document.createElement("p"); // add win, lose, or tie message to gameResults
    const roundResults = document.createElement("p"); // add win, lose, or tie message to current round


    function playRound(playerSelection, computerSelection){
        function computerPlay(){
        const optionsArray = ["rock", "paper", "scissors"];
        let randomSelection = Math.floor(Math.random() * optionsArray.length);
        computerSelection = optionsArray[randomSelection];
        return computerSelection;
        };
        computerPlay();

        const winning = `congrats! You win this round! ${playerSelection} beats ${computerSelection}`; // win, lose, and tie messages
        const losing = `Aww, you lost this round! ${computerSelection} beat ${playerSelection}`;
        const tie = `It's a tie! ${playerSelection} = ${computerSelection}`;
        
        // console.log("Player: ", playerSelection.textContent);
        // console.log("Computer: ", computerSelection.toUpperCase());
        
        if (playerSelection === rock){ // assign values to choices to compare
            playerSelection = 3;
        } else if (playerSelection === scissors){
            playerSelection = 2;
        } else if (playerSelection === paper){ // value of 'paper' changes depending on computer's selection
            if (computerSelection === "rock"){
                playerSelection = 4;
            } else {
                playerSelection = 1;
            }
        };
        
        if (computerSelection === "rock"){
            computerSelection = 3;
        } else if (computerSelection === "scissors"){
            computerSelection = 2;
        } else if (computerSelection === "paper"){ // value of 'paper' changes depending on player's selection
            if (playerSelection === 3){ // playerSelection is converted from string to a number so "rock" is now 3
                computerSelection = 4;
            } else {
                computerSelection = 1;
            }
        };
        
        
        if (playerSelection > computerSelection){ // update scores
            roundResults.textContent = winning;
            ++playerScore;
            
            
        } else if(playerSelection < computerSelection){
            roundResults.textContent = losing;
            ++computerScore;  
            
        } else {
            roundResults.textContent = tie;
        };
        
        let scoreReport = document.createElement("p");

        scoreReport.textContent = `Player Score: ${playerScore}  Computer Score: ${computerScore}`; // display scores
        gameResults.appendChild(scoreReport);
        if (playerScore === 5){ // announce win, lose, or tie message for the entire game
            scoreKeeper.textContent = "You are the ultimate champion!";
        } else if (computerScore === 5) {
            scoreKeeper.textContent = "You lose the game!";
        } else {
            scoreKeeper.textContent = "Keep Playing!";
        };
    };

    
    const buttons = document.querySelectorAll("button");
    
    buttons.forEach((button) => { // add event listeners to buttons
        button.addEventListener("click", function(e){
            
            playRound(button.innerHTML);
        });
    });
    
    
    

    
    gameResults.appendChild(roundResults);
    gameResults.appendChild(scoreKeeper);
    document.body.appendChild(gameResults);
    
};

game();