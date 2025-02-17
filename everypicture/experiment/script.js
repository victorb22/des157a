(function(){
    'use strict';
    console.log('reading js');

    const container = document.querySelector('#container');
    const spots = document.querySelectorAll('#container div');
    const pic = document.querySelector('div img');
    const hider = document.querySelector('#hideme');


    spots.forEach(function(eachSpot){
        eachSpot.addEventListener('mouseover', effect);
    });

    function effect(event){
        const thisCorner = event.target.id;
        console.log(thisCorner);
        switch (thisCorner){
            case 'topl': pic.className = 'topl'; break;
            case 'topr': pic.className = 'topr'; break;
            case 'botl': pic.className = 'botl'; break;
            case 'botr': pic.className = 'botr'; break;
            case 'center': pic.className = 'center'; break;
        };
    };
}());