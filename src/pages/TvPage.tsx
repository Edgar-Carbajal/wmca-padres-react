import { useEffect, useState } from "react";
import ChannelSelector from "../components/ChannelSelector";
import useFetch from "../hooks/useFetch";

import {
    bridgeReceiveIntegerFromNative,
    bridgeReceiveBooleanFromNative,
    bridgeReceiveStringFromNative,
    bridgeReceiveObjectFromNative
} from "@crestron/ch5-crcomlib"
  
/* 
    Required for subscribing to signals to receive feedback
*/
(window as any)["bridgeReceiveIntegerFromNative"] = bridgeReceiveIntegerFromNative;
(window as any)["bridgeReceiveBooleanFromNative"] = bridgeReceiveBooleanFromNative;
(window as any)["bridgeReceiveStringFromNative"] = bridgeReceiveStringFromNative;
(window as any)["bridgeReceiveObjectFromNative"] = bridgeReceiveObjectFromNative;

function GeneralControls(props: any) {

  const { fetchCsvData } = useFetch();
  const [channelData, setChannelData] = useState<any[]>([])
  const [northTVsVisible, setNorthTVsVisible] = useState(true)
  const [southTVsVisible, setSouthTVsVisible] = useState(false)
  const [mapBackground, setMapBackground] = useState('northBg')

  const channelDataString = "CHANNEL,NAME,ICON\n0,HDMI In,WallInput.png\n5,Fox 5/69,CH5.png\n6,Ch 6,CH6.png\n7,KNSD 7/39,CH7.png\n8,KFMB 8,CH8.png\n9,KUSI 9/51,CH9.png\n10,KGTV 10,CH10.png\n11,KPBS,CH11.png\n12,Nick Jr.,CH12.png\n13,Weather,CH13.png\n14,FX,CH14-Alt.png\n15,Fox Business,CH15.png\n16,Fox News,CH16.png\n17,CNN,CH17.png\n18,CNBC,CH18.png\n19,MSNBC,CH19.png\n20,Golf,CH20.png\n21,ESPN,CH21.png\n22,ESPN 2,CH22.png\n23,ESPN News,CH23.png\n24,ESPN U,CH24.png\n25,Ch 25,CH25-Alt.png\n26,FS 1,CH26-Alt.png\n27,Bally SD,BallySN.png\n28,Bally West,BallySN.png\n29,CBS Sports,CH29.png\n30,NBC Sports,CH30.png\n31,AMC,CH25-AMC.png\n32,TBS,CH32.png\n33,TNT,CH33-Alt.png\n34,NBA TV,CH34.png\n35,NFL Network,CH35.png\n36,NHL Network,CH36.png\n37,MLB Network,CH37.png\n38,MLB 1,FanConnect.png\n39,MLB 2,FanConnect.png\n40,MLB 3,FanConnect.png\n41,MLB 4,FanConnect.png\n42,MLB 5,FanConnect.png\n43,MLB 6,FanConnect.png\n44,MLB 7,FanConnect.png\n45,MLB 8,FanConnect.png\n46,MLB 9,FanConnect.png\n47,MLB 10,FanConnect.png\n48,MLB 11,FanConnect.png\n49,MLB 12,FanConnect.png\n50,MLB 13,FanConnect.png\n51,MLB 14,FanConnect.png\n52,MLB 15,FanConnect.png\n55,PADRES 1,PadresTV-SD.png\n56,PADRES 2,PadresTV-SD.png\n57,PADRES 3,PadresTV-SD.png\n58,PADRES 4,PadresTV-SD.png\n59,PADRES 5,PadresTV-SD.png\n60,PADRES 6,PadresTV-SD.png\n61,PADRES 7,PadresTV-SD.png\n62,PADRES 8,PadresTV-SD.png\n66,SALES 1,PetcoTV.png\n67,SALES 2,PetcoTV.png\n68,SALES 3,PetcoTV.png\n69,SALES 4,PetcoTV.png\n70,Fort Wayne,CH70.png\n71,San Antonio,CH71.png\n72,El Paso,CH72.png\n73,Lake Elsinore,CH73.png"

  useEffect(() => {
    fetchCsvData(channelDataString, setChannelData)
  //   subscribeState('s', '1', (value:any) => {
  //     const { data } = Papa.parse(value, {
  //                 header : true,
  //                 dynamicTyping : true
  //             });

  //     setChannelData(data)
  //   })
  }, []);
  
  // console.log(channelData);

  const northMapActive = () => {
    setNorthTVsVisible(true);
    setSouthTVsVisible(false);
    setMapBackground('northBg')
  }
  const southMapActive = () => {
    setNorthTVsVisible(false);
    setSouthTVsVisible(true);
    setMapBackground('southBg')
  }

  return (

    <div className="tvPage pageBase" style={{visibility: props.isVisible ? 'visible' : 'hidden'}}>

      <div className="tvSelectorCont">

        <div className="roomSelectBtns">
            <button
              className="northRoomBtn btnBase"
              style={{backgroundColor:  mapBackground === 'northBg' ? "black" : '#d3d3d3', border : "border: 3px solid white", color: mapBackground === 'northBg' ? "white" : "black"}}
              onClick={northMapActive}
              >North</button>
            <button
              className="southRoomBtn btnBase"
              style={{backgroundColor:  mapBackground === 'southBg' ? "black" : '#d3d3d3', border : "border: 3px solid white", color: mapBackground === 'southBg' ? "white" : "black"}}
              onClick={southMapActive}
            >South</button>
        </div>

        <div className="roomMap ">

         <div className={"roomMap " + mapBackground} > </div>
        
          <div className="northMapTVs" style={{visibility: northTVsVisible && props.isVisible ? 'visible' : 'hidden'}}>
          

            <button
              className="tv101 btnBase"
            >TV</button>
          
            <button
              className="tv102 btnBase"
            >TV</button>
          
            <button
              className="tv103 btnBase"
            >TV</button>
          
            <button
              className="tv104 btnBase"
            >TV</button>
          
            <button
              className="tv105 btnBase"
            >TV</button>
          
            <button
              className="tv106 btnBase"
            >TV</button>
          
            <button
              className="tv107 btnBase"
            >TV</button>
          
            <button
              className="tv108 btnBase"
            >TV</button>
          
            <button
              className="tv109 btnBase"
            >TV</button>
          
            <button
              className="tv110 btnBase"
            >TV</button>
          
            <button
              className="tv111 btnBase"
            >TV</button>
            <button
              className="tv114 btnBase"
            >TV</button>

            
          </div>

          <div className="southMapTVs" style={{visibility: southTVsVisible && props.isVisible ? 'visible' : 'hidden'}}>

            <button
              className="tv112 btnBase"
            >112</button>

            <button
              className="tv113 btnBase"
            >113</button>
          
          </div>

        </div> 

      </div>
      

      <fieldset className="tvPageControls bgBase">

        <legend className="tvPageControlsLabel labelBase">TV Controls</legend>

        <div className="pwrBtns">
          <button
            className={"currentTvPwrOn btnBase pwrOnBase"}
            // onClick={}
          >Power On</button>
          <button
            className={"currentTvPwrOff btnBase pwrOffBase"}
            // onClick={}
          >Power Off</button>
        </div>

        <div className="tvPageSelector">

          <p className="channelLabel labelBase">Channel: </p>

          <ChannelSelector channelData={channelData}></ChannelSelector>
        </div>

      </fieldset>


    </div>

  );
}

export default GeneralControls;