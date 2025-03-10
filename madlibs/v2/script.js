(function(){
    'use strict';
    console.log('reading js');

        // this element will hold the madlib
    const output = document.querySelector('#output');
        // this is the form for submission

    const form = document.querySelector('form');

    const results = document.querySelector('#results');

    const input = document.querySelector('#input');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        const greeting = document.querySelector('#greeting').value;
        const name = document.querySelector('#name').value;
        const noun = document.querySelector('#noun').value;
        const verb = document.querySelector('#verb').value;
        const number = document.querySelector('input[name="number"]:checked')?.value || '';
        const plnoun = document.querySelector('#plnoun').value;
        const urname = document.querySelector('#urname').value;
        const farewell = document.querySelector('#farewell').value;

        let myText;

        if (greeting == '') {
            myText = "Please provide a greeting.";
            document.querySelector('#greeting').focus();
            // added below to put the error on the page for each field
            errorMessage.innerHTML = myText;
        } else if (name == '') {
            myText = "Please provide a name.";
            document.querySelector('#name').focus();
            errorMessage.innerHTML = myText; // error message
        } else if (noun == '') {
            myText = "Please provide a noun.";
            document.querySelector('#noun').focus();
            errorMessage.innerHTML = myText;  //error message
        } else if (verb == '') {
            myText = "Please provide a verb.";
            document.querySelector('#verb').focus();
            errorMessage.innerHTML = myText;  //error message
        } else if (number == '') {
            myText = "Please provide an number.";
            document.querySelector('#number').focus();
            errorMessage.innerHTML = myText; // error message
        } else if (plnoun == '') {
            myText = "Please provide a plural noun.";
            document.querySelector('#plnoun').focus();
            errorMessage.innerHTML = myText;  //error message
        } else if (urname == '') {
            myText = "Please provide a name.";
            document.querySelector('#urname').focus();
            errorMessage.innerHTML = myText;  //error message
        } else if (farewell == '') {
            myText = "Please provide a farewell.";
            document.querySelector('#farewell').focus();
            errorMessage.innerHTML = myText;  //error message
        }
        else {
            myText =  `<p class="top"><strong>You</strong></p> <p class="top">${name}</p> 
            <br>
            <p><span>${greeting}</span> <span>${name}</span>,</p>
            <p> I’m so sorry, but I won’t be able to make it today! I was just making 
                my way out when my <span>${noun}</span> began to break down. Luckily, I was close. But 
                to make matters worse, I was in the middle of <span>${verb}</span> my way inside, 
                when <span>${number}</span> <span>${plnoun}</span> attacked me! I just managed to escape, but I promise I 
                will make it next time and hope we can reschedule!</p>
            <p> <span>${farewell}</span>, <span>${urname}</span></p>`;

                        document.querySelector('#greeting').value = '';
                        document.querySelector('#name').value = '';
                        document.querySelector('#noun').value = '';
                        document.querySelector('#verb').value = '';
                        document.querySelector('#plnoun').value = '';
                        document.querySelector('#number').value = '';
                        document.querySelector('#farewell').value = '';
                        document.querySelector('#urname').value = '';

            
                        // put the MadLib on the page
                        output.innerHTML = myText;

                        /* below shows the overlay. If you swap classes 
                        for showing and hidden, you can do that instead. 
                        Here I am setting the overlay to display block.
                        Look in the inspector to see it happen. */
                        input.style.display = 'none';
                        results.style.display = "block";
    }});
}());