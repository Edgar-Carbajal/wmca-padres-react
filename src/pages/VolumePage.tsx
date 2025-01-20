import { useState } from "react";
import Fader from "../components/Fader";
import FaderBank from "../components/FaderBank";

function VolumePage(props: any) {

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
      label: "TV Source",
      class: "tvSource",
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
      label: "fake1",
      class: "fake1",
      volUpFunc: ()=>{},
      volDownFunc: ()=>{},
      muteFunc: ()=>{},
    },
    {
      label: "fake2",
      class: "fake2",
      volUpFunc: ()=>{},
      volDownFunc: ()=>{},
      muteFunc: ()=>{},
    },
    {
      label: "fake3",
      class: "fake3",
      volUpFunc: ()=>{},
      volDownFunc: ()=>{},
      muteFunc: ()=>{},
    },
    {
      label: "fake4",
      class: "fake4",
      volUpFunc: ()=>{},
      volDownFunc: ()=>{},
      muteFunc: ()=>{},
    },
    {
      label: "fake5",
      class: "fake5",
      volUpFunc: ()=>{},
      volDownFunc: ()=>{},
      muteFunc: ()=>{},
    },
    {
      label: "fake6",
      class: "fake6",
      volUpFunc: ()=>{},
      volDownFunc: ()=>{},
      muteFunc: ()=>{},
    }

  ]

  return (

    <div className="volPage pageBase" style={{visibility: props.isVisible ? 'visible' : 'hidden'}}>
      
      <fieldset className="masterVolCntrl bgBase">

        <legend className="masterVolLabel labelBase">Master Volume</legend>

        <Fader volCntrl={masterVolCntrl}></Fader>
      
      </fieldset>

      <FaderBank faderLimit={5} volCntrls={volCntrls}></FaderBank>

    </div>

  );
}

export default VolumePage;