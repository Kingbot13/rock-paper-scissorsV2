function game(){

    let playerScore = 0; // store scores
    let computerScore = 0;

    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");


function playRound(playerSelection, computerSelection){
    function computerPlay(){
        const optionsArray = ["rock", "paper", "scissors"];
        let randomSelection = Math.floor(Math.random() * optionsArray.length);
        computerSelection = optionsArray[randomSelection];
        return computerSelection;
    };
        computerPlay();
        // playerSelection = document.querySelector(`button[id="${}"]`);
        const winning = `congrats! You win this round! ${playerSelection} beats ${computerSelection}`; // win, lose, and tie messages
        const losing = `Aww, you lost this round! ${computerSelection} beat ${playerSelection}`;
        const tie = `It's a tie! ${playerSelection} = ${computerSelection}`;
        
        console.log("Player: ", playerSelection.toUpperCase());
        console.log("Computer: ", computerSelection.toUpperCase());
        
        if (playerSelection.textContent.toLowerCase() === "rock"){ // assign values to choices to compare
            playerSelection = 3;
        } else if (playerSelection.textContent.toLowerCase() === "scissors"){
            playerSelection = 2;
        } else if (playerSelection.textContent.toLowerCase() === "paper"){ // value of 'paper' changes depending on computer's selection
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
        
        let results;
        
        if (playerSelection > computerSelection){ // update scores
            results = winning;
            ++playerScore;
            
            
        } else if(playerSelection < computerSelection){
            results = losing;
            ++computerScore;  
            
        } else {
            results = tie;
        };
        
        let scoreReport = `Player Score: ${playerScore}  Computer Score: ${computerScore}`; // display scores
        
        console.log(results);
        console.log(scoreReport);

    };

    const buttons = document.querySelectorAll("button");

    buttons.forEach(addEventListener("click", function(e){
        playerSelection = e.button;
        playRound();
    }));

    const gameResults = document.querySelector("div"); // div container for diplaying results

    const scoreKeeper = document.createElement("p")

    if (playerScore > computerScore){ // announce win, lose, or tie message for playing all 5 games
        scoreKeeper.textContent = "You are the ultimate champion!";
    } else if (playerScore < computerScore) {
        scoreKeeper.textContent = "You lose the game!";
    } else {
        scoreKeeper.textContent = "Wow! You tied!";
    };

    gameResults.appendChild(scoreKeeper);




};

game();


