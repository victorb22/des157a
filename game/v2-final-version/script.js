(function(){
    console.log('reading js');
    'use strict';

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');
    const gameData = {
        dice: ['1die.png', '2die.png', '3die.png', 
               '4die.png', '5die.png', '6die.png'],
        players: ['Player 1', 'Player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 100
    };

    startGame.addEventListener('click', function(){
        // randomly set the gameData.index here, which will choose the player
        gameData.index = Math.round(Math.random());
        // console.log(gameData.index);

        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML += '<button id="quit">Want to Quit?</button>';

        document.querySelector('#quit').addEventListener('click', function(){
            location.reload();
        });

        // console.log('set up the turn');

        setUpTurn();
    });


    function setUpTurn(){
        gameControl.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.querySelector('#roll').addEventListener('click', function(){
            throwDice();

            // console.log('roll the dice!');
        })
        // console.log('setting up turn');
    };

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        gameControl.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        gameControl.innerHTML += `<img src="images/${gameData.dice[gameData.roll1 - 1]}"> <img src ="images/${gameData.dice[gameData.roll2 - 1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

                // if two 1's are rolled - player loses all their points
                if (gameData.rollSum === 2){
                    actionArea.innerHTML += '<h2>SNAKE EYESSS</h2>';
                    gameData.score[gameData.index] = 0;

                    // test - vb -----
                    document.querySelector(`#healthbar${gameData.index} div`).style.height = '0%';        
        
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    // add showcurrentscore() function here
                    showCurrentScore();
                    // wait 2 secs
                    setTimeout(setUpTurn, 2000);
                    // console.log('snakes!!');
                } 
                // if one 1 is rolled - turn lost
                else if(gameData.roll1 === 1 || gameData.roll2 === 1){
                    // console.log('one rolled!');
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    actionArea.innerHTML = `<p>You rolled a one! switching to ${gameData.players[gameData.index]}</p>`;
                    setTimeout(setUpTurn, 2000);
                }
        
                // if neither dice is a 1
                else {
                    document.querySelector(`#healthbar${gameData.index} div`).style.height = `${gameData.rollSum + gameData.score[gameData.index]}%`;                    
                    gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
                    actionArea.innerHTML = '<button id="rollagain">Roll Again</button> <p id="or">OR</p> <button id="pass">Pass</button>';

                    const fish = document.querySelector(`#fish${gameData.index}`);
                    fish.className = 'fish'
                    setTimeout(function() {
                        fish.className = 'shakes';
                    }, 10);
                    
                    document.querySelector('#rollagain').addEventListener('click', function(){
                        throwDice();
                    });
        
                    document.querySelector('#pass').addEventListener('click', function(){
                        gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                        setUpTurn();
                    });
                    // checkwinningcondition function added here
                    checkWinningCondition();
                }
    };

    function checkWinningCondition(){
        if (gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points</h2>`;
            document.querySelector(`#fish${[gameData.index]}`).className = `shake`;
            gameControl.innerHTML = '';
            actionArea.innerHTML = '<button id="restart">Play Again?</button>';
            document.querySelector('#restart').addEventListener('click', function(){
                location.reload();
            })
            // gameControl.innerHTML = '';
            // document.querySelector('#quit').innerHTML = 'Start a new game?';
        } else{
            // show current score>>>
            showCurrentScore();
        }
    };

    function showCurrentScore(){
        score.innerHTML = `<p>SCORE<strong>${gameData.players[0]}:
        ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}: 
        ${gameData.score[1]}</strong></p>`;
    };
}());