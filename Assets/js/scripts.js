 
  //The website allows you to plan your journey with cycle and compare with other modes of transport. 
  //Add startup code
  document.addEventListener("DOMContentLoaded", function(){
      //set focus
      document.getElementById("where-from").focus();
      //set defaults
      searchPostcodeA(document.getElementById("where-from").value = "W9 3RG");
      searchPostcodeB(document.getElementById("where-to").value = "N8 9QR");
  
      //gets all buttons
      var buttons = document.getElementsByTagName("button");
      //gets all input cells
      var inputcells = document.getElementsByTagName("input");
          
      //Alert box appears when data-type = Geo else it shows traveltype kicks of planJourney function
      for (let button of buttons){
          button.addEventListener("click", function(){
              if(this.getAttribute("data-type") === "Geo"){
                  alert("You are searching for postcode."); //replace this with API for wait times
              } else{
                  var travelType= this.getAttribute("data-type");
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
  
      var postcode = postcode_in
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
  
      var postcode = postcode_in
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
      const resultsMessage = `Journey from ${outA.innerHTML} to ${outB.innerHTML}`;
      document.getElementById("resultsMessage").innerHTML = resultsMessage;
  }
  
  function planJourney(from, to, mode){
          
      switch (mode) {
          case "Cycle":
              url = `https://api.tfl.gov.uk/Journey/JourneyResults/${from}/to/${to}?accessibilityPreference=NoRequirements&walkingSpeed=Slow&cyclePreference=AllTheWay&bikeProficiency=Moderate`;
              break;
          case "Bus":
              url = `https://api.tfl.gov.uk/Journey/JourneyResults/${from}/to/${to}?timeIs=Departing&journeyPreference=LeastInterchange&mode=Bus&accessibilityPreference=NoRequirements&walkingSpeed=Slow&cyclePreference=None&bikeProficiency=Easy`;
              break;
          case "Tube":
              url = `https://api.tfl.gov.uk/Journey/JourneyResults/${from}/to/${to}?timeIs=Arriving&journeyPreference=LeastInterchange&mode=tube&accessibilityPreference=NoRequirements&walkingSpeed=Slow&cyclePreference=None&bikeProficiency=Easy`;
              break;
          case "Walk":
              url = `https://api.tfl.gov.uk/Journey/JourneyResults/${from}/to/${to}?timeIs=Departing&journeyPreference=LeastInterchange&mode=walking&accessibilityPreference=NoRequirements&walkingSpeed=Fast&cyclePreference=None&bikeProficiency=Easy`;
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
              throw `Unknown travel type. Aborting!`;
      }
  }
  
  function createP(id, txt){
    para = document.createElement("p");
    txtNode = document.createTextNode(txt);
    para.appendChild(txtNode);
    pnt = document.getElementById(id);
    pnt.appendChild(para);
  }
  
  function showBusDetails(data) {
      document.getElementById("busRoot").innerHTML=``;
      const busData = [data.length, data[0].legs.length];
      root = document.getElementById("busRoot");
      
      busSum = [`Fastest Routes with Bus:`, 
      `There are ${busData[0]} possible routes.`, 
      `Interchanges: They require upto ${busData[1]} interchanges.`,
      `Duration: `];
      
      for (i=0;i<busSum.length;i++){
        createP("busRoot", busSum[i]);
      }
      
      for (i=0;i<busData[0];i++){
        createP("busRoot", `Routes #${i+1} takes:${parseInt(data[i].duration)} minutes.`);
    }
        createP("busRoot","Cost*: Daily cap is £5.25.");
        createP("busRoot", "Hopper fare allows unlimited bus journeys within one hour of first touching in for £1.75.");
                    
  }
  function showTubeDetails(data) {
    document.getElementById("tubeRoot").innerHTML=``;
    const tubeData = [data.length, data[0].legs.length];
    root = document.getElementById("tubeRoot");
    tubeSum = [`Fastest Routes with Tube:`, 
    `There are ${tubeData[0]} possible routes.`, 
    `Interchanges: They require upto ${tubeData[1]} interchanges.`,
    `Duration: `];
    
    for (i=0;i<tubeSum.length;i++){
      createP("tubeRoot", tubeSum[i]);
    }
    
    for (i=0;i<tubeData[0];i++){
      createP("tubeRoot", `Routes #${i+1} takes:${parseInt(data[i].duration)} minutes.`);
  }
      createP("tubeRoot","Cost*: Daily cap for zones 1-4 is £11.70. A single fare journey costs £3.40/£2.80");
      createP("tubeRoot", "*Alternative fares: Avoiding zone 1, a single fare journey costs £1.75.");
  }
  
  function showWalkingDetails(data) {
      document.getElementById("walkRoot").innerHTML=``;
      document.getElementById("walkRoot").innerHTML = `This journey will take ${parseInt(data[0].duration)} minutes.`;
  }
  
  function showCycleDetails(data) {
      document.getElementById("cycleRoot").innerHTML=``;
      createP("cycleRoot", `This journey will take ${parseInt(data[0].duration)} minutes.`);
      createP("cycleRoot", `Cost* \nDaily charge 17p per minute. Total Cost: £ ${Math.round(parseFloat(data[0].duration*0.17))}`);
      createP("cycleRoot",`*Alternative fares: Passes available for 60/120mins cost £5.99/£10.99, respectively.`);  
    }