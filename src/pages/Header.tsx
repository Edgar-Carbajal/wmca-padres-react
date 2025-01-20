import React, { useState, useEffect } from 'react';


function Header(props:any) {

    const [currentTime, setCurrentTime] = useState("new Date()");

   
    useEffect(() => {
        const intervalId = setInterval(() => {
          const currentDate = new Date();
          const formattedDate = currentDate.toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
          });
          setCurrentTime(formattedDate);
        }, 1000); // Update every second
    
        return () => clearInterval(intervalId);
      }, []);

    

    return (
        <div className="header" style={{visibility: props.isVisible ? 'visible' : 'hidden'}}>
            <div
                id="barLoftHeader"
                className="barLoftHeader"
            >{props.currentLabel} </div>
            <div
                id="headerLabel"
                className="headerLabel"
            >{props.headerLabel}</div>
            <div id="timeHeader" className="timeHeader">
                {currentTime}
            </div>
          
      </div>
    );
  }
  
  export default Header;