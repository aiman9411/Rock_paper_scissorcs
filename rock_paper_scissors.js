const getUserChoice = userInput => {userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    }else {
      console.log('Error. Kindly input rock, paper, or scissors');
    }
    }
    
    function getComputerChoice() {
      random_Number = Math.floor(Math.random() * 3)
      if (random_Number === 0) {
        return 'rock'
      } else if (random_Number === 1) {
        return 'paper'
      } else {
        return 'scissors';
      }
    }
    
    function determineWinner(userChoice, computerChoice) {
      if (userChoice === computerChoice) {
        return "The game is a tie!";
      }
      if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return 'The computer won!';
        } else {
          return 'You won!';
        }
      }
      if (userChoice === 'paper') {
        if(computerChoice === 'scissors') {
          return 'The computer won!';
        } else {
          return 'You won!';
        }
      }
      if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          return 'The computer won!'
        } else {
          return 'You won!';
        }
      }
      if (userChoice === 'bomb') {
        if(computerChoice === 'rock' || computerChoice === 'paper' || computerChoice === 'scissors') {
          return 'You won!'
        }
      }
    }
    
    const playGame = () => {
      const userChoice = getUserChoice('bomb');
      const computerChoice = getComputerChoice();
      console.log('You choose: ' + userChoice);
      console.log('Computer chooses: ' + computerChoice);
    
      console.log(determineWinner(userChoice, computerChoice));
    }
    
    playGame()
    
    