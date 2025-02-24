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
        window.scrollTo({ top: 250, behavior: "smooth" });

        switch (thisCorner){
            case 'topl': open.className = 'showing'; break;
            case 'topr': open2.className = 'showing'; break;
            case 'botl': open3.className = 'showing'; break;
            case 'botr': open4.className = 'showing'; break;
            case 'center': open5.className = 'showing'; break;
        };

        document.querySelector('#close1').addEventListener('click', function(event){
            event.preventDefault();
            document.querySelector('#open').className = 'hidden';
        })

        document.querySelector('#close2').addEventListener('click', function(event){
            event.preventDefault();
            document.querySelector('#open2').className = 'hidden';
        })

        document.querySelector('#close3').addEventListener('click', function(event){
            event.preventDefault();
            document.querySelector('#open3').className = 'hidden';
        })

        document.querySelector('#close4').addEventListener('click', function(event){
            event.preventDefault();
            document.querySelector('#open4').className = 'hidden';
        })

        document.querySelector('#close5').addEventListener('click', function(event){
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
        const nextBtn = document.getElementById('next');
        const prevBtn = document.getElementById('prev');

        nextBtn.addEventListener('click', function(e){
            e.preventDefault();

            currentpic++;
            if(currentpic > pin1.length - 1){
                currentpic = 0;
            }
            document.getElementById('gettingTh').src = pin1[currentpic];
        })

        prevBtn.addEventListener('click', function (e) {
            e.preventDefault();
    
            currentpic--;
            if (currentpic < 0){
                 currentpic = pin1.length - 1; 
            }
    
            document.getElementById('gettingTh').src = pin1[currentpic];
        });

        let currentpic2 = 0;
        const pin2 = ['./images/pin2-image1.png', './images/pin2-image2.png', './images/pin2-image3.png', './images/pin2-image4.png', './images/pin2-image5.png', './images/pin2-image6.png', './images/pin2-image7.png', './images/pin2-image8.png', './images/pin2-image9.png', './images/pin2-image10.png'];
        const nextBtn2 = document.getElementById('next2');
        const prevBtn2 = document.getElementById('prev2');

        nextBtn2.addEventListener('click', function(e){
            e.preventDefault();

            currentpic2++;
            if(currentpic2 > pin2.length - 1){
                currentpic2 = 0;
            }
            document.getElementById('gettingTh2').src = pin2[currentpic2];
        })

        prevBtn2.addEventListener('click', function(e){
            e.preventDefault();
    
            currentpic2--;
            if (currentpic2 < 0){
                 currentpic2 = pin2.length - 1; 
            }
    
            document.getElementById('gettingTh2').src = pin2[currentpic2];
        });

        let currentpic3 = 0;
        const pin3 = ['./images/pin3-image1.png', './images/pin3-image2.png','./images/pin3-image3.png','./images/pin3-image4.png','./images/pin3-image5.png',];
        const nextBtn3 = document.getElementById('next3');
        const prevBtn3 = document.getElementById('prev3');

        nextBtn3.addEventListener('click', function(e){
            e.preventDefault();

            currentpic3++;
            if(currentpic3 > pin3.length - 1){
                currentpic3 = 0;
            }
            document.getElementById('gettingTh3').src = pin3[currentpic3];
        })

        prevBtn3.addEventListener('click', function(e){
            e.preventDefault();
    
            currentpic3--;
            if (currentpic3 < 0){
                 currentpic3 = pin3.length - 1; 
            }
    
            document.getElementById('gettingTh3').src = pin3[currentpic3];
        });

        let currentpic4 = 0;
        const pin4 = ['./images/pin4-image1.png', './images/pin4-image2.png', './images/pin4-image3.png', './images/pin4-image4.png', './images/pin4-image5.png', './images/pin4-image6.png', './images/pin4-image7.png', './images/pin4-image8.png', './images/pin4-image9.png', './images/pin4-image10.png', './images/pin4-image11.png', './images/pin4-image12.png', './images/pin4-image13.png',];
        const nextBtn4 = document.getElementById('next4');
        const prevBtn4 = document.getElementById('prev4');

        nextBtn4.addEventListener('click', function(e){
            e.preventDefault();

            currentpic4++;
            if(currentpic4 > pin4.length - 1){
                currentpic4 = 0;
            }
            document.getElementById('gettingTh4').src = pin4[currentpic4];
        })

        prevBtn4.addEventListener('click', function(e){
            e.preventDefault();
    
            currentpic4--;
            if (currentpic4 < 0){
                 currentpic4 = pin4.length - 1; 
            }
    
            document.getElementById('gettingTh4').src = pin4[currentpic4];
        });

        let currentpic5 = 0;
        const pin5 = ['./images/pin5-image1.png', './images/pin5-image2.png', './images/pin5-image3.png', './images/pin5-image4.png', './images/pin5-image5.png', './images/pin5-image6.png'];
        const nextBtn5 = document.getElementById('next5');
        const prevBtn5 = document.getElementById('prev5');

        nextBtn5.addEventListener('click', function(e){
            e.preventDefault();

            currentpic5++;
            if(currentpic5 > pin5.length - 1){
                currentpic5 = 0;
            }
            document.getElementById('gettingTh5').src = pin5[currentpic5];
        })

        prevBtn5.addEventListener('click', function(e){
            e.preventDefault();
    
            currentpic5--;
            if (currentpic5 < 0){
                 currentpic5 = pin5.length - 1; 
            }
    
            document.getElementById('gettingTh5').src = pin5[currentpic5];
        });
           
}());