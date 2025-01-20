import { useState } from "react";
import Fader from "./Fader";

function FaderBank(props: any) {

    const [currentStart, setCurrentStart] = useState(0);
    const [currentEnd, setCurrentEnd] = useState(5);

    const goToTopFader = () => {
        setCurrentStart(0)
        setCurrentEnd(props.faderLimit);
    }
    const skipBackFader = () => {
        setCurrentStart(0)
        setCurrentEnd(props.faderLimit);
    }
    const backFader = () => {
        if(currentStart>0){

            setCurrentStart(currentStart-1)
            setCurrentEnd(currentEnd-1);
        }
    }
    const forwardFader = () => {
        
        if(currentEnd < props.volCntrls.length){
            
            setCurrentStart(currentStart+1)
            setCurrentEnd(currentEnd+1);
        }
    }
    const skipForwardFader = () => {
        setCurrentStart(0)
        setCurrentEnd(props.faderLimit);
    }
    
    
    const goToBottomFader = () => {
        setCurrentStart(props.volCntrls.length - 5);
        setCurrentEnd(props.volCntrls.length);
    }

    return (
        <div className="faderBank">

            <fieldset className="faderBankBg bgBase">

                <legend className="faderBankLabel labelBase">Volumes</legend>

                <div className="fadersList">

                    {
                        props.volCntrls.slice(currentStart, currentEnd).map((fader:any) =>{
                            
                            return(
                                <div key={fader.label + "Cont"} className="faderCont" >
                                    
                                    <p key={fader.label + "Label"} className="faderLabel">{fader.label}</p>

                                    <Fader key={fader.label} volCntrl={fader}></Fader>

                                </div>
                            )
                            
                        }) 
                    }

                </div>

                <div className="traversalBtns">
                    <button 
                        className="topFaderBtn btnBase"
                        onClick={goToTopFader}
                    >Top</button>
                    {/* <button 
                        className="skipBack btnBase"
                        onClick={skipBackFader}
                    >{"<<"}</button> */}
                    <button 
                        className="back btnBase"
                        onClick={backFader}
                    >{"<"}</button>
                    <button 
                        className="forward btnBase"
                        onClick={forwardFader}
                    >{">"}</button>
                    {/* <button 
                        className="skipForward btnBase"
                        onClick={skipForwardFader}
                    >{">>"}</button> */}
                    <button 
                        className="bottomFaderBtn btnBase"
                        onClick={goToBottomFader}
                    >Bottom</button>
                </div>

            </fieldset>
                
        </div>
    );
}

export default FaderBank;