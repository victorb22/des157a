(function(){
    'use strict';
    console.log('reading js');

    const spots = document.querySelectorAll('#container div');
    const pic = document.querySelector('#container img');
    const open = document.querySelector('#open');
    const open2 = document.querySelector('#open2'); 
    const open3 = document.querySelector('#open3'); 
    const open4 = document.querySelector('#open4'); 
    const open5 = document.querySelector('#open5'); 
 

    spots.forEach(function(eachSpot){
        eachSpot.addEventListener('click', effect);
    });

    function effect(event){
        event.preventDefault();
        const thisCorner = event.target.id;
        console.log(thisCorner);
        switch (thisCorner){
            case 'topl': open.className = 'showing'; break;
            case 'topr': open2.className = 'showing'; break;
            case 'botl': open3.className = 'showing'; break;
            case 'botr': open4.className = 'showing'; break;
            case 'center': open5.className = 'showing'; break;
        };

        document.querySelector('.close').addEventListener('click', function(event){
            event.preventDefault();
            document.querySelector('#open').className = 'hidden';
        })

        document.querySelector('.close2').addEventListener('click', function(event){
            event.preventDefault();
            document.querySelector('#open2').className = 'hidden';
        })

        document.querySelector('.close3').addEventListener('click', function(event){
            event.preventDefault();
            document.querySelector('#open3').className = 'hidden';
        })

        document.querySelector('.close4').addEventListener('click', function(event){
            event.preventDefault();
            document.querySelector('#open4').className = 'hidden';
        })

        document.querySelector('.close5').addEventListener('click', function(event){
            event.preventDefault();
            document.querySelector('#open5').className = 'hidden';
        })
    };

        // will determine which hotspot div you mouse over
        let thisSpot;
        let movingMouse;
    
        function zoomPhoto(event) {
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
    
        spots.forEach(function (eachSpot) {
            eachSpot.addEventListener('mouseover', zoomPhoto);
            
            eachSpot.addEventListener('mouseout', function () {
                thisSpot = 'out';
                console.log(thisSpot);
            });
        });
    
        document.addEventListener('mousemove', function(){
            clearTimeout(movingMouse);
            if(thisSpot == 'out'){
                movingMouse = setTimeout(function(){
                    pic.className = 'start';
                    console.log('zooming out!');
                }, 1000);
            }
        });
        
        let currentpic = 0;
        const pin1 = ['./images/pin1-image1.png', './images/pin1-image2.png', './images/pin1-image3.png', './images/pin1-image4.png', './images/pin1-image5.png'];
        // const container = document.getElementById('pics1');
        const nextBtn = document.getElementById('next');
        const prevBtn = document.getElementById('prev');

        nextBtn.addEventListener('click', function(e){
            e.preventDefault();

            currentpic++;
            if(currentpic > pin1.length - 1){
                currentpic = 0;
            }
            // swapImage();
            document.getElementById('gettingTh').src = pin1[currentpic];
        })

        prevBtn.addEventListener('click', function (e) {
            e.preventDefault();
    
            currentpic--;
            if (currentpic < 0){
                 currentpic = pin1.length - 1; 
            }
    
            // swapImage();
            document.getElementById('gettingTh').src = pin1[currentpic];
        });
    
        // function swapImage() {
        //     const newSlide = document.createElement('img');
        //     newSlide.src = `${pin1[currentImage]}`;
        //     // newSlide.className = "fadeinimg";
        //     container.appendChild(newSlide);
    
        //     if (container.children.length > 2) {
        //         container.removeChild(container.children[0]);
        //     }
        // }        
}());