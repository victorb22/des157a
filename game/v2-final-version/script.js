(function(){
    console.log('reading js');
    'use strict';

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');
    const qmark = document.querySelector('#qmark');
    const overlay = document.querySelector('#overlay');
    const close = document.querySelector('#closeQ');
    const body = document.querySelector('body');
    const fishClick = new Audio('audio/fish-click.mp3');
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

    qmark.addEventListener('click', function(){
        fishClick.play();
        overlay.className = 'showing';
        body.className = 'bg';
    })

    close.addEventListener('click', function(){
        fishClick.play();
        overlay.className = 'hidden';
        body.className = 'showing';
    })

    startGame.addEventListener('click', function(){
        fishClick.play();
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
                    const waterSound = new Audio('audio/water.mp3');
                    waterSound.play();
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
            const winner = document.querySelector(`#health${gameData.index}`);
            winner.className = 'fish';
            setTimeout(function() {
                winner.className = 'winner';
            }, 10);
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points</h2>`;
            gameControl.innerHTML = '';
            actionArea.innerHTML = '<button id="restart">Play Again?</button>';
            document.querySelector('#restart').addEventListener('click', function(){
                location.reload();
            });
        } else{
            // show current score>>>
            showCurrentScore();
        }
    };

    function showCurrentScore(){

        score.innerHTML = `<section id="js-score"><h2>${gameData.score[0]}</h2><h1>SCORE</h1><h2>${gameData.score[1]}</h2></section>`
    };
}());