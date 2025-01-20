import { useState } from "react";
import SystemInfo from "../components/SystemInfo";
import PasscodeKeypad from "../components/PasscodeKeypad";

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




function SettingsPage(props: any) {

  const [currentView, setCurrentView] = useState("Bar");
  const [systemInfoVisible, setSystemInfoVisible] = useState(true);
  const [keyPadVisible, setKeyPadVisible] = useState(false);
  const keyPadStyles ={
    keypad : "keypadSettings",
    inputCont : "inputCont",
    keypadTitle : "keypadTitleSettings",
    passcodeInput : "passcodeInputSettings",
    numberPad : "numberPadSettings"
  }
  
  const fullScreenClean = () => {
    props.cleanScreen();
    
    setTimeout(() => {
      props.stopCleaning();
    }, 60000); 
  }

  const switchToBarLoft = () => {
    props.setCurrentNavLayers(props.userNavLayers);
    props.roofNavLayers[0].navFunc("General Controls")
    setCurrentView("Bar");
    props.setCurrentLabel("Bar Loft")
  }
  const switchToRackRoom = () => {
    props.setCurrentNavLayers(props.roofNavLayers);
    props.roofNavLayers[0].navFunc("Mode Controls")
    setCurrentView("Roof");
    props.setCurrentLabel("Roof")
  }

  return (

    <div className="settingsPage pageBase" style={{visibility: props.isVisible ? 'visible' : 'hidden'}}>
      
      <div className="settingsBg bgBase">

        <div className="currentSettingsPage">
          <SystemInfo isVisible={(systemInfoVisible && props.isVisible)} logOut={props.logOut} fullScreenClean={fullScreenClean}></SystemInfo>
          <PasscodeKeypad keyPadStyles = {keyPadStyles} passcodeChanging={true && keyPadVisible && props.isVisible} isVisible={keyPadVisible && props.isVisible} passcodeCorrect={props.passcodeCorrect} userNavLayers={props.userNavLayers} adminNavLayers={props.adminNavLayers} setCurrentNavLayers={props.setCurrentNavLayers} dialogueConfig={props.dialogueConfig} passcodeSignals={props.passcodeSignals} passcodeResults={props.passcodeResults}passcodeMsgs={props.passcodeMsgs} accessLvl={props.accessLvl} setAccessLvl={props.setAccessLvl}></PasscodeKeypad>
        </div>

        <div className="settingsPageNav">
            <button
              className="btnBase"
              onClick={() => {setSystemInfoVisible(true); setKeyPadVisible(false)}}
              >System Info</button>
            <button
              className="btnBase"
              onClick={() => {setSystemInfoVisible(false); setKeyPadVisible(true)}}
            >Password Admin</button>

            {
              currentView === "Bar" ? 
                  <button
                  className="btnBase"
                  style={{visibility: ( currentView === "Bar") && props.isVisible ? 'visible' : 'hidden'}}
                  onClick={() => {switchToRackRoom()}}
                >Switch to Rack Room View</button> :
                <button
                className="btnBase"
                style={{visibility: ( currentView === "Roof") && props.isVisible ? 'visible' : 'hidden'}}
                onClick={() => {switchToBarLoft()}}
              >Switch to Bar Loft View</button>
              

            }
          
            
        </div>
        

      </div>

    </div>

  );
}

export default SettingsPage;