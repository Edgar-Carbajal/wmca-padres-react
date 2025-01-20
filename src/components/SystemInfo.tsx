import { useState } from "react";

function SystemInfo(props: any) {


    return (

      <div className="systemInfoContainer" style={{visibility: props.isVisible ? 'visible' : 'hidden'}}>
        
        <div className="networkInfo">

            <p className="processorIP"> Processor LAN IP:</p>
            <p className="processorMAC"> Processor LAN MAC:</p>
            
            <p className="tpIP"> Processor LAN IP:</p>
            <p className="tpMAC"> Processor LAN MAC:</p>
            <p className="processorIP"> Processor LAN IP:</p>


        </div>

        <div className="systemFuncs">
            <button
              className=" btnBase"
              onClick={props.logOut}
              >Log Out</button>
            <button
              className=" btnBase"
              onClick={props.fullScreenClean}
            >Clean Screen</button>
        </div>

      </div>

    );
  }
  
  export default SystemInfo;