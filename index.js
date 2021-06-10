function game(){
    
    let playerScore = 0; // store scores
    let computerScore = 0;
    
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");
    
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
        const winning = `congrats! You win this round! ${playerSelection.innerHtml} beats ${computerSelection}`; // win, lose, and tie messages
        const losing = `Aww, you lost this round! ${computerSelection} beat ${playerSelection.innerHtml}`;
        const tie = `It's a tie! ${button.textContent} = ${computerSelection}`;
        
        console.log("Player: ", playerSelection.textContent);
        console.log("Computer: ", computerSelection.toUpperCase());
        
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
        
        console.log(scoreReport);

        gameResults.appendChild(roundResults);
    };

    const buttons = document.querySelectorAll("button");
    
    buttons.forEach((button) => { // add event listeners to buttons
        button.addEventListener("click", playRound);
    });
    
    

    if (playerScore === 5){ // announce win, lose, or tie message for playing all 5 games
        scoreKeeper.textContent = "You are the ultimate champion!";
    } else if (computerScore === 5) {
        scoreKeeper.textContent = "You lose the game!";
    };
    
    gameResults.appendChild(scoreKeeper);
    
};

game();