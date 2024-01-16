//The website allows you to plan your journey with cycle and compare with other modes of transport. 
//Add startup code
document.addEventListener("DOMContentLoaded", function(){
    //set focus
    document.getElementById("where-from").focus()
    //set defaults
    searchPostcodeA(document.getElementById("where-from").value = "W9 3RG");
    searchPostcodeB(document.getElementById("where-to").value = "N8 9QR");

    //gets all buttons
    let buttons = document.getElementsByTagName("button");
    //gets all input cells
    let inputcells = document.getElementsByTagName("input");
        
    //Alert box appears when data-type = Geo else it shows traveltype kicks of planJourney function
    for (let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "Geo"){
                alert("You are searching for postcode."); //replace this with API for wait times
            } else{
                let travelType= this.getAttribute("data-type");
                alert(`You clicked ${travelType}` );
            }
        });
    }
    
});

//Displays time
function displayTime(){
    var now = new Date();
    var elt = document.getElementById("digital-clock");
    elt.innerHTML = now.toLocaleTimeString();
    //repeat in one second
    setTimeout(displayTime, 1000);
}

//start the clock when the document loads
window.onload = displayTime;

async function searchPostcodeA(postcode_in) {

    let postcode = postcode_in
    const url = `https://api.postcodes.io/postcodes/${postcode}`;
    fetch(url)
    .then(response => {
        if (!response.ok) {
            alert (`Unknown Postcode: ${postcode}`);
            throw new Error('Network response was not ok');            
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        displaydataA(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

//If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

// this bit of code, displays geo location. 
function displaydataA(data) {
    const locA = data.result.postcode;
    const outA = document.getElementById("outputA");
    outA.innerHTML = locA;

}


async function searchPostcodeB(postcode_in) {

    let postcode = postcode_in
    const url = `https://api.postcodes.io/postcodes/${postcode}`;
    fetch(url)
    .then(response => {
        if (!response.ok) {
            alert (`Unknown Postcode: ${postcode}`);
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        displaydataB(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}


// this bit of code, displays geo location. 
function displaydataB(data) {
    const locB = data.result.postcode;
    const outA = document.getElementById("outputA");
    const outB = document.getElementById("outputB");
    outB.innerHTML = locB;
    resultsMessage = `Your options for the journey from ${outA.innerHTML} to ${outB.innerHTML}`;
    document.getElementById("resultsMessage").innerHTML = resultsMessage;
}

function planJourney(from, to, mode){
    
    //this creates an empty results area.
//    document.getElementById("result area").value= "";    

    switch (mode) {
        case "Cycle":
            url = `https://api.tfl.gov.uk/Journey/JourneyResults/${from}/to/${to}?accessibilityPreference=NoRequirements&walkingSpeed=Slow&cyclePreference=AllTheWay&bikeProficiency=Moderate`
            break;
        case "Bus":
            url = `https://api.tfl.gov.uk/Journey/JourneyResults/${from}/to/${to}?timeIs=Departing&journeyPreference=LeastInterchange&mode=Bus&accessibilityPreference=NoRequirements&walkingSpeed=Slow&cyclePreference=None&bikeProficiency=Easy`
            break;
        case "Tube":
            url = `https://api.tfl.gov.uk/Journey/JourneyResults/${from}/to/${to}?timeIs=Departing&journeyPreference=LeastInterchange&mode=Tube&accessibilityPreference=NoRequirements&walkingSpeed=Slow&cyclePreference=None&bikeProficiency=Easy`
            break;
        case "Walk":
            url = `https://api.tfl.gov.uk/Journey/JourneyResults/${from}/to/${to}?timeIs=Departing&journeyPreference=LeastWalking&mode=Walk&accessibilityPreference=NoRequirements&walkingSpeed=Average&cyclePreference=None&bikeProficiency=Easy&walkingOptimization=True`
            break;

    }

    fetch(url, {
        method: 'GET',
        // Request headers
        headers: {
            'Cache-Control': 'no-cache',}
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return (response.json());
    })
    .then(data => {
        console.log(data);
        displayJourney(data.journeys, mode);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

function displayJourney (data, mode) {
    //this function will be call for each travel mode.
    //Create variables for the journey
    switch (mode) {
        case "Cycle":
            showCycleDetails(data);
            break;
        case "Bus":
            showBusDetails(data);
            break;
        case "Tube":
            showTubeDetails(data);
            break;
        case "Walk":
            showWalkingDetails(data);
            break;
        default:
            alert (`Unknown travel type`);
            throw `Unknown travel type. Aborting!`
    }
}



function showBusDetails(data) {
    document.getElementById("busDuration").innerHTML=``;
    const busOptions = data.length;
    document.getElementById("busRoutes").innerHTML = `There are ${busOptions} possible routes:`;
    document.getElementById("busInterchange").innerHTML = `They require upto ${data[0].legs.length} interchanges.`;
    for (i=0;i<busOptions;i++){
        document.getElementById("busDuration").innerHTML += `Routes #${i+1} takes:${parseInt(data[i].duration)} minutes.`;
    }

}
function showTubeDetails(data) {
    document.getElementById("tubeDuration").innerHTML=``;
    const tubeOptions = data.length;
    document.getElementById("tubeRoutes").innerHTML = `There are ${tubeOptions} possible routes:`;
    document.getElementById("tubeInterchange").innerHTML = `They require upto ${data[0].legs.length} interchanges.`;
    for (i=0;i<busOptions;i++){
        document.getElementById("tubeDuration").innerHTML += `Routes #${i+1} takes:${parseInt(data[i].duration)} minutes.`;
    }
}

function showWalkingDetails(data) {
    document.getElementById("walkDuration").innerHTML=``;
    document.getElementById("walkDuration").innerHTML = `Routes #1 takes:${parseInt(data[0].duration)} minutes.`;
}

function showCycleDetails(data) {
    document.getElementById("cycleDuration").innerHTML=``;
    document.getElementById("cycleDuration").innerHTML = `Route #1 takes:${parseInt(data[0].duration)} minutes.`;
    document.getElementById("cycleCost").innerhtml = `£ ${parseFloat(data[0].duration*0.17)}`
}