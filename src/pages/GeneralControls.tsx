import { useState } from "react";
import Fader from "../components/Fader";

function GeneralControls(props: any) {

  const [currentTV, setCurrentTv] = useState("");
  
  const barTvBtns = [
    {
      label : "TV 1",
      class : "tv1",
      powerOnFunc : ()=>{},
      powerOffFunc : ()=>{},
      followFunc : ()=>{setCurrentTv("TV 1")}
    },
    {
      label : "TV 2",
      class : "tv2",
      powerOnFunc : ()=>{},
      powerOffFunc : ()=>{},
      followFunc : ()=>{setCurrentTv("TV 2")}
    },
    {
      label : "TV 3",
      class : "tv3",
      powerOnFunc : ()=>{},
      powerOffFunc : ()=>{},
      followFunc : ()=>{setCurrentTv("TV 3")}
    },
    {
      label : "TV 4",
      class : "tv4",
      powerOnFunc : ()=>{},
      powerOffFunc : ()=>{},
      followFunc : ()=>{setCurrentTv("TV 4"); console.log()}
    }
  ]

  const volCntrls =[
    {
      label: "Master",
      class: "master",
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
    }
  ]

  return (

    <div className="gcPage pageBase" style={{visibility: props.isVisible ? 'visible' : 'hidden'}}>
      
      <div className="generalCntrls">

        <div className="gcFaders">

          <fieldset className="masterVolCntrl bgBase">

            <legend className="masterVolLabel labelBase">Master Volume</legend>

            <Fader volCntrl={volCntrls[0]}></Fader>

          
          </fieldset>

          <fieldset className="btCntrl bgBase">
            
            <legend className="btVolLabel labelBase">Bluetooth Volume</legend>

            <Fader volCntrl={volCntrls[1]}></Fader>

          </fieldset>
        </div>

        <div className="btConnectCntrls">
          <button
            className="btConnectBtn btnBase"
          >Connect to Bluetooth</button>
        </div>

      </div>

      <fieldset className="barTvCntrl bgBase">
        
        <legend className="btVolLabel labelBase">Bar TV Controls</legend>

        <p className="followedTv labelBase">Current TV: {currentTV}</p>

        <div className="tvCntrlBtns"> 

          {
            barTvBtns.map( (barTvBtn) => {

              return(
                <div key={barTvBtn.class}>

                  <div key={barTvBtn.class +"Cntrl"} className={barTvBtn.class +"Cntrl"} >

                    <p key={barTvBtn.class + "Label"} className={barTvBtn.class + "Label labelBase"}>{barTvBtn.label}: </p>
                    
                    <button
                      key={barTvBtn.class + "PwrOn"}
                      className={barTvBtn.class + "PwrOn btnBase pwrOnBase"}
                      onClick={barTvBtn.powerOnFunc}
                    >Power On</button>
                    <button
                       key={barTvBtn.class + "PwrOff"}
                       className={barTvBtn.class + "PwrOff btnBase pwrOffBase"}
                       onClick={barTvBtn.powerOffFunc}
                    >Power Off</button>
                    <button
                      key={barTvBtn.class + "Follow"}
                      className={barTvBtn.class + "Follow btnBase"}
                      onClick={barTvBtn.followFunc}
                    >Follow {barTvBtn.label}</button>
                  </div>
                  
                  <div key={barTvBtn.class + "sepLine"} className="sepLine"  style={{visibility:(props.isVisible && (barTvBtns.indexOf(barTvBtn) !== barTvBtns.length-1)) ? 'visible' : 'hidden'}}></div>

                </div>
              );
              
            })
          }

        </div>

      </fieldset>

    </div>

  );
}

export default GeneralControls;