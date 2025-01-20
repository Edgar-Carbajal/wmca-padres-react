import { useState } from "react";
import Fader from "../components/Fader";
import FaderBank from "../components/FaderBank";

function RoofVolumePage(props: any) {

  const masterVolCntrl = {
    
      label: "Master",
      class: "master",
      volUpFunc: ()=>{},
      volDownFunc: ()=>{},
      muteFunc: ()=>{},
    
  }

  const volCntrls =[
    {
      label: "WLS 1",
      class: "wls1",
      volUpFunc: ()=>{},
      volDownFunc: ()=>{},
      muteFunc: ()=>{},
    },
    {
      label: "WLS 2",
      class: "wls2",
      volUpFunc: ()=>{},
      volDownFunc: ()=>{},
      muteFunc: ()=>{},
    },
    {
      label: "Bluetooth",
      class: "bt",
      volUpFunc: ()=>{},
      volDownFunc: ()=>{},
      muteFunc: ()=>{},
    },
    {
        label: "Mixer Console",
        class: "mixer",
        volUpFunc: ()=>{},
        volDownFunc: ()=>{},
        muteFunc: ()=>{},
      },
      {
        label: "Analog 1",
        class: "analog1",
        volUpFunc: ()=>{},
        volDownFunc: ()=>{},
        muteFunc: ()=>{},
      },
      {
        label: "Analog 2",
        class: "analog2",
        volUpFunc: ()=>{},
        volDownFunc: ()=>{},
        muteFunc: ()=>{},
      },
      {
        label: "Analog 3",
        class: "analog3",
        volUpFunc: ()=>{},
        volDownFunc: ()=>{},
        muteFunc: ()=>{},
      },
      {
        label: "Analog 4",
        class: "analog4",
        volUpFunc: ()=>{},
        volDownFunc: ()=>{},
        muteFunc: ()=>{},
      },
      {
        label: "Analog 5",
        class: "analog5",
        volUpFunc: ()=>{},
        volDownFunc: ()=>{},
        muteFunc: ()=>{},
      },
      {
        label: "Analog 6",
        class: "analog6",
        volUpFunc: ()=>{},
        volDownFunc: ()=>{},
        muteFunc: ()=>{},
      },
      {
        label: "Analog 7",
        class: "analog7",
        volUpFunc: ()=>{},
        volDownFunc: ()=>{},
        muteFunc: ()=>{},
      },
      {
        label: "Analog 8",
        class: "analog8",
        volUpFunc: ()=>{},
        volDownFunc: ()=>{},
        muteFunc: ()=>{},
      },
      {
        label: "Analog 9",
        class: "analog9",
        volUpFunc: ()=>{},
        volDownFunc: ()=>{},
        muteFunc: ()=>{},
      },
      {
        label: "Analog 10",
        class: "analog10",
        volUpFunc: ()=>{},
        volDownFunc: ()=>{},
        muteFunc: ()=>{},
      },
      {
        label: "Analog 11",
        class: "analog11",
        volUpFunc: ()=>{},
        volDownFunc: ()=>{},
        muteFunc: ()=>{},
      },
      {
        label: "Analog 12",
        class: "analog12",
        volUpFunc: ()=>{},
        volDownFunc: ()=>{},
        muteFunc: ()=>{},
      },

  ]

  return (

    <div className="roofVolPage pageBase" style={{visibility: props.isVisible ? 'visible' : 'hidden'}}>
      
      <fieldset className="masterVolCntrl bgBase">

        <legend className="masterVolLabel labelBase">Master Volume</legend>

        <Fader volCntrl={masterVolCntrl}></Fader>
      
      </fieldset>

      <FaderBank faderLimit={5} volCntrls={volCntrls}></FaderBank>

    </div>

  );
}

export default RoofVolumePage;