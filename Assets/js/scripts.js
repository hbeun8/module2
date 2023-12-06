
//Add startup code
//Listen to button click events

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    //this gets the buttons

    for (let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "submit"){
                alert("You clicked submit!");
            } else{
                let modeType= this.getAttribute("data-type");
                alert(`You clicked ${modeType}` );
                planJourney(modeType);
            }
        });
    }

});


/*Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

MDN Reference*/


/**
 * 
 */
function planJourney() {

    //Create variables for the journey
    let pointA = searchWhereTo();
    let pointB = searchWhereFrom(); 
    let t0 = searchDeparture();
    let t1 = searchArrival();

}
function searchWhereTo() {
    let postcode = 'SW1A 1AA'; // Replace with the postcode you want to look up
    const url = `https://api.postcodes.io/postcodes/${postcode}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const { latitude, longitude } = data.result;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        console.log(`Postcode: ${postcode} is  ${result ? `valid`: `invalid`}`);
  })
  .catch(error => console.error(error));
}
function searchWhereFrom() {
    let postcode = 'SW1A 1AA'; // Replace with the postcode you want to look up
    const url = `https://api.postcodes.io/postcodes/${postcode}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const { latitude, longitude } = data.result;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        console.log(`Postcode: ${postcode} is  ${result ? `valid`: `invalid`}`);
  })
  .catch(error => console.error(error));
}
function searchDeparture() {
    const d = new Date();
    document.getElementById("demo").innerHTML = d;
}
function searchArrival() {
    //optional
}
function checkValidInputs() {}
function showBusDetails() {}
function showTubeDetails() {}
function showCycleDetails() {}
function showWalkingDetails() {}
function showComboDetails() {}
function displayTierCoverage() {}
function displayLimeCoverage() {}
function displaySantandaerCoverage() {}
function displayHuFoCovergae() {}
function displayDottCoverage() {}
function decrementToken() {}
function IncrementboughtToken() {}
