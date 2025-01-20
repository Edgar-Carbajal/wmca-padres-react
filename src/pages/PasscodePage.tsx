import { useState } from "react";
import PasscodeKeypad from "../components/PasscodeKeypad";
import DialogueBox from "../components/DialogueBox";

function PasscodePage(props: any) {

    const keyPadStyles ={
      keypad : "keypad",
      keypadTitle : "keypadTitle",
      passcodeInput : "passcodeInput",
      numberPad : "numberPad"
    }


    return (
      <>
      <DialogueBox isVisible={props.dialogueConfig.dialogueVisible} message={props.dialogueConfig.dialogueMessage}></DialogueBox>

      <div className="passwordPage" style={{visibility: props.isVisible ? 'visible' : 'hidden'}}>
        

            <div className="passwordTitle">Western Metal Supply</div>

            <div className="passwordLower">

                <div className="padreImagePassword"></div>

                <PasscodeKeypad keyPadStyles ={keyPadStyles}isVisible={props.isVisible} passcodeChanging={false} passcodeCorrect={props.passcodeCorrect} dialogueConfig={props.dialogueConfig} userNavLayers={props.userNavLayers} adminNavLayers={props.adminNavLayers} setCurrentNavLayers={props.setCurrentNavLayers} passcodeSignals={props.passcodeSignals}  passcodeResults={props.passcodeResults} passcodeMsgs={props.passcodeMsgs} accessLvl={props.accessLvl} setAccessLvl={props.setAccessLvl}></PasscodeKeypad>
            
            </div>

      </div>
      </>
    );
  }
  
  export default PasscodePage;