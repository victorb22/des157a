(function(){
    'use strict';
    console.log('reading js');

    const container = document.querySelector('#container');
    const spots = document.querySelectorAll('#container div');
    const pic = document.querySelector('div img');
    const open = document.querySelector('#open'); 

    spots.forEach(function(eachSpot){
        eachSpot.addEventListener('click', effect);
        eachSpot.addEventListener('mouseover', zoomIn);
    });

    function zoomIn(e){
        e.preventDefault();
        const thisSpot = e.target.id;
        switch(thisSpot){
            // case 'topl': open.className = 'showing'; break;
            // case 'topr': open.className = 'showing'; break;
            // case 'botl': open.className = 'showing'; break;
            // case 'botr': open.className = 'showing'; break;
            // case 'center': open.className = 'showing'; break;
        }
    }

    function effect(event){
        event.preventDefault();
        const thisCorner = event.target.id;
        console.log(thisCorner);
        switch (thisCorner){
            case 'topl': open.className = 'showing'; break;
            case 'topr': open.className = 'showing'; break;
            case 'botl': open.className = 'showing'; break;
            case 'botr': open.className = 'showing'; break;
            case 'center': open.className = 'showing'; break;
        };

        document.querySelector('.close').addEventListener('click', function(event){
            event.preventDefault();
            document.querySelector('#open').className = 'hidden';
        })
    };
}());