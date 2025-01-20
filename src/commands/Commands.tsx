import {
    bridgeReceiveIntegerFromNative,
    bridgeReceiveBooleanFromNative,
    bridgeReceiveStringFromNative,
    bridgeReceiveObjectFromNative
} from "@crestron/ch5-crcomlib"
  
import {publishEvent, subscribeState} from "@crestron/ch5-crcomlib";

/* 
    Required for subscribing to signals to receive feedback
*/
(window as any)["bridgeReceiveIntegerFromNative"] = bridgeReceiveIntegerFromNative;
(window as any)["bridgeReceiveBooleanFromNative"] = bridgeReceiveBooleanFromNative;
(window as any)["bridgeReceiveStringFromNative"] = bridgeReceiveStringFromNative;
(window as any)["bridgeReceiveObjectFromNative"] = bridgeReceiveObjectFromNative;



// interval use to repeat a command when holding a button down
let interval: any = null;

/**
 * Sends a digital signal pulse to the Crestron Processor
    with the join number given
 * 
 * @param {string} signalNum - The join number for the desired command
 * @returns void - nothing is returned
 */
function pulseCommand(signalNum : string){
    publishEvent("b", signalNum, true);
    publishEvent("b", signalNum, false);
}

/**
 * Sends a object signal high to the Crestron Processor
    with the join number given
 * Repeteadly sends a high signal to the Processor
 * 
 * @param {string} signalNum - The join number for the desired command
 * @returns void - nothing is returned
 */
function pressAndHoldCommand(signalNum : string) {
    // initial high signal
    publishEvent("o",signalNum, {repeatdigital : true});
    //checks if there is an interval currently activated to see if a high signal should be continue sending
    if(interval !== null) 
      return; 
      publishEvent("o", signalNum, {repeatdigital : true});
      interval=setInterval(()=>{ 
        publishEvent("o", signalNum, {repeatdigital : true});
    },250);
}

/**
 * Sends a object signal low to the Crestron Processor
    with the join number given
 * 
 * @param {string} signalNum - The join number for the desired command
 * @returns void - nothing is returned
 */
function releaseCommand(signalNum : string) {
    // clears the interval so that the high signal can stop being sent
    if(interval !== null) {
      clearInterval(interval);
      interval = null;
    }
    // sends a low signal to stop repeating
    publishEvent("o", signalNum, {repeatdigital : false});
}

/**
 * Sends a string signal to the Crestron Processor
    with the join number and the string value given 
 * 
 * @param {string} signalNum - The join number for the desired command
 * @param {string} stringVal - The string value to be sent to the processor
 * @returns void - nothing is returned
 */
function sendStringValue(signalNum : string, stringVal : string){
    publishEvent("s", signalNum, stringVal)
}


export {
    pulseCommand,
    pressAndHoldCommand,
    releaseCommand,
    sendStringValue
};