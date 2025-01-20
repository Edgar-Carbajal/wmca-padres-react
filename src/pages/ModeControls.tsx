import { useState } from "react";

function ModeControls(props: any) {

  const [currentMixingMode, setCurrentMixingMode] = useState("Mixer Mode");
  const [currentJoinMode, setCurrentJoinMode] = useState("Joined");

  return (

    <div className="modesPage pageBase" style={{visibility: props.isVisible ? 'visible' : 'hidden'}}>

      <div className="btRoofConnectCntrls">
        <button
          className="btConnectBtn btnBase"
        >Connect to Bluetooth</button>
      </div>

      <fieldset className="mixerModeCont bgBase">
        <legend className="labelBase">Mixer Mode</legend>

        <div className="mixerModeBtns">
          <button
            style={{backgroundColor: currentMixingMode === "Mixer Mode" ? 'black' : '#d3d3d3', color: currentMixingMode === "Mixer Mode" ? 'white' : 'black'}} 
            className="mixerMode btnBase"
            onClick={() => {setCurrentMixingMode("Mixer Mode")}}
            >Mixer Mode</button>
          <button 
            style={{backgroundColor: currentMixingMode === "AutoMix Mode" ? 'black' : '#d3d3d3', color: currentMixingMode === "AutoMix Mode" ? 'white' : 'black'}} 
            className="autoMixerMode btnBase"
            onClick={() => {setCurrentMixingMode("AutoMix Mode")}}
            >Auto-Mixer Mode</button>
        </div>

      </fieldset>

      <fieldset className="joinModeCont bgBase">
        <legend className="labelBase">Join Areas</legend>

        <div className="joinModeBtns">
          <button 
            style={{backgroundColor: currentJoinMode === "Joined" ? 'black' : '#d3d3d3', color: currentJoinMode === "Joined" ? 'white' : 'black'}} 
            className="joinRoomsMode btnBase"
            onClick={() => {setCurrentJoinMode("Joined")}}
          >Join Roof & Bar</button>
          <button 
            className="disconnectRoomsMode btnBase"
            style={{backgroundColor: currentJoinMode === "Disconnected" ? 'black' : '#d3d3d3', color: currentJoinMode === "Disconnected" ? 'white' : 'black'}} 
            onClick={() => {setCurrentJoinMode("Disconnected")}}
          >Seperate Roof & Bar</button>
        </div>

      </fieldset>

    </div>

  );
}

export default ModeControls;