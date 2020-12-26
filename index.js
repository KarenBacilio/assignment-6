const battleship = () => {
  //object to store player 1 information
  let player1 = {
    name: prompt("Player 1, what is thy name?"),
    shipCount: 4,
    gameBoard: [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]]
    };
  
  //object to store player 2 information
  let player2 = {
    name: prompt("Player 2, name yourself!"),
    shipCount: 4,
    gameBoard: [
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0]]
    };  
  
  //loop until 4 ships have been added to board
  for(let i = 0; i < 4; i++){
    //making random x and y coordinates
    let randomX = Math.floor(Math.random() * 4)
    console.log("randomX is:", randomX);
    let randomY = Math.floor(Math.random() * 4)
    console.log("randomY is:", randomY);
    //note on putting Y first and X. on battleship instructions it shows how the x coordinate is the zeros within the array and the y coordinate actually corresponds to which array to access. I started off with player1.gameBoard[X][Y] but soon realized that's not what I needed
    if(player1.gameBoard[randomY][randomX] === 1){
        i--;
      }else{
        player1.gameBoard[randomY][randomX] = 1;
      }
    }
  
    //now time to make random board for player 2
  for(let i = 0; i < 4; i++){
    //making random x and y coordinates
    let randomX = Math.floor(Math.random() * 4)
    console.log("randomX is:", randomX);
    let randomY = Math.floor(Math.random() * 4)
    console.log("randomY is:", randomY);
    if(player2.gameBoard[randomY][randomX] === 1){
      i--;
    }else{
      player2.gameBoard[randomY][randomX] = 1;
      }
   }
  
  //console log to see the 4  random ships on the board, first player 1:
  console.log("below is player 1 board:\n", player1.gameBoard[0]);
  console.log(player1.gameBoard[1]);
  console.log(player1.gameBoard[2]);
  console.log(player1.gameBoard[3]);
  //below is the game board for player 2, with 4 random ships included
  console.log("below is player 2 board:\n", player2.gameBoard[0]);
  console.log(player2.gameBoard[1]);
  console.log(player2.gameBoard[2]);
  console.log(player2.gameBoard[3]);
  
  //function created inside function to so I can switch between players and use the same attack prompts
  gamePlay = (attackPlayer, defendPlayer) => {
    let attackX = parseInt(prompt(`Hello ${attackPlayer.name}, please choose your attack position for X. Choose your number from 0 to 3`));
    console.log('their attack coordinate for X is:', attackX);
  
    //we also need to store both their attack X and Y values somewhere hmmm..
    let attackY = parseInt(prompt( `${attackPlayer.name}, what is your attack position for the Y coordinate? Choose your number from 0 to 3`))
   
     //now let's check to see if player's attack coordinates hits the a ship
    if(defendPlayer.gameBoard[attackY][attackX] === 1){
      //if ship is here, make their 1 ship sink to 0
      defendPlayer.gameBoard[attackY][attackX] = 0;
      alert("We got a hit! We sink they ship, matey!");
      //log to see if we got a hit and to see if change was made correctly
      console.log("This is the grid that we are attacking\n",defendPlayer.gameBoard[0]);
      console.log(defendPlayer.gameBoard[1]);
      console.log(defendPlayer.gameBoard[2]);
      console.log(defendPlayer.gameBoard[3]);
      //and decrement their ship shipCount
      defendPlayer.shipCount--;  
      }else if(defendPlayer.gameBoard[attackY][attackX] == 0){
        alert("Arg! You missed they ship!!");
        console.log("This is the grid that we are attacking\n",defendPlayer.gameBoard[0]);
        console.log(defendPlayer.gameBoard[1]);
        console.log(defendPlayer.gameBoard[2]);
        console.log(defendPlayer.gameBoard[3]);
    }
    if(defendPlayer.shipCount == 0){
      console.log (`The winner is ${attackPlayer.name}`);
    }else if (attackPlayer == player1){
        gamePlay(player2, player1);
    }else if(attackPlayer == player2){
        gamePlay(player1, player2);
    }
  }
  gamePlay(player1, player2);
  }



const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult
