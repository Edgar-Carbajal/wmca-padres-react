import { sendStringValue } from "../commands/Commands";
import { useState } from "react";
import {publishEvent, subscribeState} from "@crestron/ch5-crcomlib";
import {
    bridgeReceiveIntegerFromNative,
    bridgeReceiveBooleanFromNative,
    bridgeReceiveStringFromNative,
    bridgeReceiveObjectFromNative
} from "@crestron/ch5-crcomlib"

(window as any)["bridgeReceiveIntegerFromNative"] =
    bridgeReceiveIntegerFromNative;
(window as any)["bridgeReceiveBooleanFromNative"] =
    bridgeReceiveBooleanFromNative;
(window as any)["bridgeReceiveStringFromNative"] =
    bridgeReceiveStringFromNative;
(window as any)["bridgeReceiveObjectFromNative"] =
    bridgeReceiveObjectFromNative;



function PasscodeKeypad(props: any) {


    
    const keypadBtns = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "Clear", "0", "Enter" ];

    // const [accessLvl, setAccessLvl] = useState(props.passcodeResults.user_code);
    const [passcodeInput, setPasscodeInput] = useState("")
    const [loggingIn, setLoggingIn] = useState(true);
    const [currentAction, setCurrentAction] = useState("Login");
    

    function inputNumber(number : string){
        if(passcodeInput.length < 4){
            document.getElementsByClassName(props.keyPadStyles.passcodeInput)[0].textContent += "*";
            setPasscodeInput(passcodeInput + number);

        }
    }

    function verifyPasscode(){
        if(passcodeInput === "1234"){
            props.setCurrentNavLayers(props.userNavLayers);
            props.passcodeCorrect();
            props.userNavLayers[0].navFunc("General Controls")
        }
        else if(passcodeInput === "5678"){
            props.setCurrentNavLayers(props.adminNavLayers);
            props.passcodeCorrect();
            props.adminNavLayers[0].navFunc("General Controls")
        }

        // sendStringValue(props.passcodeSignals.verifyPasscode, passcodeInput);

        // setTimeout(function() {
            
        //     subscribeState('s', "1", (value:any) => {
        //         if( value === props.passcodeResults.user_code ){
        //             props.passcodeCorrect();
        //             props.setCurrentNavLayers(props.userNavLayers);
        //         }
        //         else if( value === props.passcodeResults.admin_code ){
                    // props.passcodeCorrect();
                    // props.setCurrentNavLayers(props.adminNavLayers);
                
        //         }
        //         else{
        //             showDialogueBox(value);
        //         }
        //     });

        // },10);
        
        clear();
    }
    
    function changePasscode(){

        var passCheck = props.accessLvl + passcodeInput;

        sendStringValue(props.passcodeSignals.changePasscode, passCheck);

        setTimeout(function() {
            
            subscribeState('s', "2", (value:any) => { 
                showDialogueBox(value);
            });

        },10);

        clear();
    }

    function showDialogueBox(value:any){
        props.dialogueConfig.setDialogueVisible(true);
        props.dialogueConfig.setDialogueMessage(props.passcodeMsgs[value as keyof typeof props.passcodeMsgs])
        setTimeout(function(){
            props.dialogueConfig.setDialogueVisible(false);

        }, 1500);
    }

    function clear(){
        document.getElementsByClassName(props.keyPadStyles.passcodeInput)[0].textContent = "";
        setPasscodeInput("");
    }

    return (
        <div className={props.keyPadStyles.keypad} style={{visibility: props.isVisible ? 'visible' : 'hidden'}}>
            
            <div className={props.keyPadStyles.inputCont}>
                <p className={props.keyPadStyles.keypadTitle}>Enter Four Digit Passcode...</p>
                
                <div className={props.keyPadStyles.passcodeInput}></div>
                
            </div>

            
            <div className={props.keyPadStyles.numberPad}>

                {
                    keypadBtns.map( (number) => {

                        if( number === "Clear" ){

                            return <button
                                        key={number}
                                        className={"btn" + {number}}
                                        onClick={ clear}
                                    >{number}</button>
                            
                        }
                        else if( number === "Enter"){
                            return <button
                                        key={number}
                                        className={"btn" + {number}}
                                        onClick={ (props.passcodeChanging && !loggingIn) ? changePasscode : verifyPasscode }
                                    >{number}</button>
                            
                        }
                        else{

                            return <button
                                        key={number}
                                        className={"btn" + {number}}
                                        onClick={ () => {inputNumber(number)}}
                                    >{number}</button>
                            
                        }

                    })
                }
                
            </div>

            <div className="accessLvlBtns" style={{visibility: props.passcodeChanging ? 'visible' : 'hidden'}}>
                <button 
                    className="Login"
                    style={{backgroundColor: currentAction === "Login" ? 'black' : '#d3d3d3', color: currentAction === "Login" ? 'white' : 'black'}}
                    onClick={() => {setLoggingIn(true); setCurrentAction("Login");}}
                    >Login</button>
                <button 
                    className="userLvlChange"
                    style={{backgroundColor: currentAction === "User" ? 'black' : '#d3d3d3', color: currentAction === "User" ? 'white' : 'black'}}
                    onClick={() => {props.setAccessLvl(props.passcodeResults.user_code); setLoggingIn(false); setCurrentAction("User");}}
                    >Change User Password</button>
                <button 
                    className="adminLvlChange"
                    style={{backgroundColor: currentAction === "Admin" ? 'black' : '#d3d3d3', color: currentAction === "Admin" ? 'white' : 'black'}}
                    onClick={() => {props.setAccessLvl(props.passcodeResults.admin_code); setLoggingIn(false); setCurrentAction("Admin");}}
                >Change Admin Password</button>
            </div>

        </div>

    );
  }
  
  export default PasscodeKeypad;