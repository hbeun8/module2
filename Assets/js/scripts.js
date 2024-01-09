//The website allows you to plan your journey with cycle and compare with other modes of transport. 



//We want to load default journey for cycle on start up! 
//Add startup code
//Listen to event listners, such as button click events and inputs cell input
document.addEventListener("DOMContentLoaded", function(){
    //gets all buttons
    let buttons = document.getElementsByTagName("button");
    //gets all input cells
    let inputcells = document.getElementsByTagName("input");
    
    // -> to be removed - list of all tags: https://www.geeksforgeeks.org/html-tags-a-to-z-list/

    //Alert box appears when data-type = submit else it shows traveltype kicks of planJourney function
    for (let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "submit"){
                alert("You clicked submit!"); //replace this with API for wait times
            } else{
                let travelType= this.getAttribute("data-type");
                alert(`You clicked ${travelType}` ); // remove this when appropriate
                //planJourney(travelType); 
            }
        });
    }

    // remove this or we need it for searching inout box. 
    for (let cell of inputcells){
        cell.addEventListener("click", function(){
            if(this.getAttribute("type") === "text"){
                alert("You clicked TextCell!");
            } else{
                let inputType= this.getAttribute("type");
                alert(`You clicked ${inputType}` );
                //planJourney(travelType);
            }
        });
    }
});

//-> rmeove thhis Events =  interesting thing!
//- > remove thisList of Events https://developer.mozilla.org/en-US/docs/Web/Events

/*Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

MDN Reference*/

async function searchPostcode(postcode_in) {

    let postcode = postcode_in
    const url = `https://api.postcodes.io/postcodes/${postcode}`;
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        displaydata(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}


// this bit of code, displays geo location. 
function displaydata(data) {
    const locA = data.result.latitude;
    const outA = document.getElementById("outputA");
    outA.innerHTML = locA;
}

const geoA = document.getElementById("where-to").value;

//document.getElementById("findgeoA").addEventListener("click", searchPostcode(geoA));

//document.getElementById("findgeoA").addEventListener("click", searchPostcode("e14"));

/*
const geoA = document.getElementById("where-to");
const btnA = document.getElementById("findgeoA");
const outA = document.getElementById("outputA");
outA.innerHTML = btnA.addEventListener("click",geoA => searchPostcode(geoA));

document.getElementById("outputA").innerHTML = searchPostcode("n8 9Qr")
// this bit of code, displays geo location when the button is clicked. 
const geoB = docume nt.getElementById('where-from');
const btnB = document.getElementById('findgeoB');
const outB = document.getElementById('outputB');
outB.innerHTML = btnB.addEventListener('click',searchPostcode(geoB));
*/

/*
function planJourney(travelType) {
    //this creates an empty results area.
    document.getElementById("result area").value= "";    document.getElementById("where-to").focus();

    //this function will be call for each travel mode.
    //Create variables for the journey
    let pointA = document.getElementById('where-to');
    let pointB = document.getElementById('where-from');
    let t0 = document.getElementById('Departure');
    let t1 = document.getElementById('Arrival');
    //If they are valid then run the rest of this function 
    if (travelType === "Cycle"){
        document.getElementById('travelType').textContent = 'Cycle';
        function showCycleDetails([pointA, pointB, t0, t1]);        
    } else if (travelType === "Bus"){
        document.getElementById('travelType').textContent = 'Bus';
        function showBusDetails([pointA, pointB, t0, t1]);        
    } else if (travelType === "Tube"){
        document.getElementById('travelType').textContent = 'Tube';
        function showTubeDetails([pointA, pointB, t0, t1]);        
    } else if (travelType === "Walk"){
        document.getElementById('travelType').textContent = 'Walk';
        function showWalkDetails([pointA, pointB, t0, t1]);        
    } else if (travelType === "Combo"){
        document.getElementById('travelType').textContent = 'Combo';
        function showTubeDetails([pointA, pointB, t0, t1]);        
    }

    else {
        alert (`Unknown travel type: $(travelType)`);
        throw `Unknown travel type: $(travelType). Aborting!` ;  
    }
    }

 // this function will set the departure time
function searchDeparture() {
    const d = new Date();
    document.getElementById("demo").innerHTML = d;
}

// this fucntion will set the apprival time, but optional
function searchArrival() {
    const d = new Date();
    document.getElementById("demo").innerHTML = d;
}

// this function checks the inputs are valid for t0,t1, pointA and pointB, an if not correct returns to default answer. 
//gets the parameters of the journey planner  
// no parameter
function checkValidInputs() {
    let pointA = document.getElementById("pointA").innerText;
    let pointB = document.getElementById("pointB").innerText;
    let t0 = document.getElementById("t0").innerText;
    let t1 = document.getElementById("t1").innerText;
    let travelType = document.getElementById("travelType").innerText;

    let isCorrectpointA = pointA ==='Valid Latitude/Longitude';
    let isCorrectpointB = pointB === 'Valid Latitude/Longitude';
    let isCorrectt0  = t0 === 'Valid Date/Time';
    let isCorrectt1  = t1 ==='Valid Date/Time';

    document.getElementById("t0").innerText = t1<t0 ? t1: t0;

    if (isCorrectpointA)) {
        if (isCorrectpointB){
            if (isCorrectt0) {
                if (isCorrectt1) {
                    alert ("Hey you got this right!:D");
                    IncrementScore();
                    return[pointA, pointB, t0, t1];
                }
            }
        }
    }
        //write a code if return is an error
    else {
            alert (`One of the inputs is not correct $(travelType)`);
            throw `Unknown travel type: $(travelType). Aborting!` ;
            IncrementWrongeAnswer();
    }
    


function showBusDetails() {
    document.getElementById('pointA-C').textContent = pointA;
    document.getElementById('pointB-C').textContent = pointB;
    document.getElementById('t0-C').textContent = t0;
    document.getElementById('t1-C').textContent = t1;
    //api results....
}
function showTubeDetails() {}


//this will be the default journey planner on startup.
function showCycleDetails(pointA, pointB, t0, t1) {
    document.getElementById('pointA-C').textContent = pointA;
    document.getElementById('pointB-C').textContent = pointB;
    document.getElementById('t0-C').textContent = t0;
    document.getElementById('t1-C').textContent = t1;
    //api results....
}

function showWalkingDetails() {
    document.getElementById('pointA-C').textContent = pointA;
    document.getElementById('pointB-C').textContent = pointB;
    document.getElementById('t0-C').textContent = t0;
    document.getElementById('t1-C').textContent = t1;
    //api results....
}
function showComboDetails() {
}
function displayTierCoverage() {}
function displayLimeCoverage() {}
function displaySantandaerCoverage() {}
function displayHuFoCovergae() {}
function displayDottCoverage() {}
function IncrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    //++ increments by 1.
    //++ before adds 
    /*the double plus or compound addition operator  basically means to add one to the value.  */
    /* If you  put the double plus signs after the variable then JavaScript will do something like this.  It will get the ID of score and it will set  
the inner text to the old score variable  and then it will add one to old score.
The result is that we never see the score being  updated.*/
/*dom before it has had one added to it. Putting  the double plus signs before the variable means  
that JavaScript will get the ID of score,  then set the inner text to one plus old score.  
So we see our score being updated. It's just  an interesting little thing that sometimes you  */

/*

document.getElementById("score").innerText = ++oldScore;
}
function IncrementWrongeAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}
*/