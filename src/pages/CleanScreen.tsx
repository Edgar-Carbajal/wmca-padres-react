import React, { useState, useEffect } from 'react';


function CleanScreen(props:any) {

    
    const cleanSeconds = document.getElementById("cleanScreenSeconds");

    function startCountdown(seconds : any) {
      let timeRemaining = seconds;
    
      const intervalId = setInterval(() => {
        console.log(timeRemaining); // Print the remaining seconds
        timeRemaining--;

        if(cleanSeconds != null)
          cleanSeconds.textContent = "Time Remaining: " + timeRemaining;
        
        if (timeRemaining <= 0) {
          clearInterval(intervalId);
        }
      }, 1000); // 1000 milliseconds = 1 second
    }

    useEffect(()=>{
      if(props.isVisible){
        startCountdown(60);
        if(cleanSeconds != null)
          cleanSeconds.textContent = "Time Remaining: 60";
      }
    },);


    return (
        <div className="cleanScreen" id="cleanScreen" style={{visibility: props.isVisible ? 'visible' : 'hidden'}}>
            <div className="cleanScreenBackground bgBase">
                <p
                  id="cleanScreenLabel"
                  className="cleanScreenLabel"
                >Clean the Screen</p>
                <p id="cleanScreenSeconds"
                  className="cleanScreenSeconds"
                >Time Remaining: 60</p>
            </div>
            
           
        </div>
    );
  }
  
  export default CleanScreen;