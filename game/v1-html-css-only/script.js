(function(){
    console.log('reading js');
    'use strict';

    const health0 = document.querySelector('#healthbar0 div');
    const health1 = document.querySelector('#healthbar1 div');
    const fish1 = document.querySelector('#fish-left');
    const fish2 = document.querySelector('#fish-right');
    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol'); // maybe just use this for die and control instead of game??
    // const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');

    const gameData = {
        dice: ['1die.png', '2die.png', '3die.png', 
               '4die.png', '5die.png', '6die.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 100,
        health: [100, 100]
    };

    startGame.addEventListener('click', function(){
        // randomly set the gameData.index here, which will choose the player
        gameData.index = Math.round(Math.random());
        // console.log(gameData.index);

        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';

        document.querySelector('#quit').addEventListener('click', function(){
            location.reload();
        });

        console.log('set up the turn');

        setUpTurn();
    });


    function setUpTurn(){
        gameControl.innerHTML = `<p>roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML += '<button id="roll">Roll the Dice</button>';
        document.querySelector('#roll').addEventListener('click', function(){
        //     throwDice();

            console.log('roll the dice!');
        })
    }

}());