(function(){
    'use strict';
    console.log('reading js');

    const container = document.querySelector('#container');
    const spots = document.querySelectorAll('#container div');
    const pic = document.querySelector('#container img');
    const open = document.querySelector('#open'); 

    spots.forEach(function(eachSpot){
        eachSpot.addEventListener('click', effect);
    });

    // will be used to determine which hotspot div you mouse over, if any.
    let thisSpot;
    // will be used to determine when the mouse has stopped moving.
    let movingMouse;

    // This is the function that zooms in on the photo
    function zoomPhoto(event) {
        //update thisSpot with the part of the image the user is mousing over
        thisSpot = event.target.id;
        console.log(`zooming into ${thisSpot}`);
        switch (thisSpot) {
            case 'topl': pic.className = 'topl'; break;
            case 'topr': pic.className = 'topr'; break;
            case 'botl': pic.className = 'botl'; break;
            case 'botr': pic.className = 'botr'; break;
            case 'center': pic.className = 'center'; break;
        }
    }

    // Add event listeners to each of the hotspots
    spots.forEach(function (eachSpot) {
        // when you mouse over a hotspot, zoom in on it.
        eachSpot.addEventListener('mouseover', zoomPhoto);
        
        // when you mouse out of a hotspot, update thisSpot to 
        // indicate you are not over a hotspot.
        eachSpot.addEventListener('mouseout', function () {
            thisSpot = 'out';
            console.log(thisSpot);
        });
    });

    /* This event listener fires while the mouse is moving.
    If the value of thisSpot is 'out' you are not over a hotspot. 
    If you stop moving the mouse for a second or longer while not
    over a hotspot, the image zooms out.
    
    This seems to keep the dizzying effects of constantly zooming in and
    out as you mouse in and out of the hotspots to a minimum, and stops the 
    unintended effect of having the image sometimes slide out of the container
    entirely.
    */
    document.addEventListener('mousemove', function(){
        clearTimeout(movingMouse);
        if(thisSpot == 'out'){
            movingMouse = setTimeout(function(){
                pic.className = 'start';
                console.log('zooming out!');
            }, 1000);
        }
    });

    function effect(event){
        event.preventDefault();
        const thisCorner = event.target.id;
        open.className = 'showing';
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