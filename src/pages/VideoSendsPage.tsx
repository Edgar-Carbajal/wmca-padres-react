import { useState } from "react";

function VideoSends(props: any) {

    var input1Routes ={
        output1: false,
        output2: false,
    }
    var input2Routes ={
        output1: false,
        output2: false,
    }
    
    var input3Routes ={
        output1: false,
        output2: false,
    }
    const [currentInput, setCurrentInput] = useState('');
    const [currentRoute, setCurrentRoutes] = useState();
    const [output1Active, setOutput1Active] = useState(false);
    const [output2Active, setOutput2Active] = useState(false);


    function checkRoutes(currentInput:any, routes:any){
        setCurrentInput(currentInput);
        setCurrentRoutes(routes)
        if(routes.output1){
            setOutput1Active(true);
        }
        if(routes.output2){
            setOutput2Active(true);
        }
    }

    function pickOutput(currentOutput:any){
        if(currentRoute){

        }
    }

    return (

      <div className="videoSendsPage pageBase" style={{visibility: props.isVisible ? 'visible' : 'hidden'}}>
    
        <fieldset className="videoInputsBg bgBase">
            <legend className="videoInputsLabel labelBase">Video Inputs</legend>
            <button
                className="videoInputsBtn1"
                style={{backgroundColor: currentInput === 'Input1' ? '#0054fc' : '#1d4650'}}
                onClick={() => {checkRoutes("Input1", input1Routes)}}
                >Input 1</button>
            <button
                className="videoInputsBtn2"
                style={{backgroundColor: currentInput === 'Input2' ? '#0054fc' : '#1d4650'}}
                onClick={() => {checkRoutes("Input2", input2Routes)}}
                >Input 2</button>
            <button
                className="videoInputsBtn3"
                style={{backgroundColor: currentInput === 'Input3' ? '#0054fc' : '#1d4650'}}
                onClick={() => {checkRoutes("Input3", input3Routes)}}
                >Input 3</button>
        </fieldset>
        <fieldset className="videoOutputsBg bgBase">
            <legend className="videoOutputsLabel labelBase">Video Outputs</legend>
            <button
                className="videoOutputsBtn1"
                >Output 1</button>
            <button
                className="videoOutputsBtn2"
            >Output 2</button>
        </fieldset>
        <div className="takeBtnCont">
            <button
                className="takeBtn"
            >Take</button>
        </div>
        

      </div>

    );
  }
  
  export default VideoSends;