import { useState } from "react";

function Fader(props: any) {


    return (
        <div className="volContainer">
            <div className={props.volCntrl.class + "VolBtns btnsContBase"}>

                <button
                    className={props.volCntrl.class + "VolUp btnBase volUpBase"}
                    onClick={props.volCntrl.volUpFunc}
                >Vol Up</button>
                <button
                    className={props.volCntrl.class + "VolDown btnBase volDownBase"}
                    onClick={props.volCntrl.volDownFunc}
                >Vol Down</button>
                <button
                    className={props.volCntrl.class + "VolMute btnBase muteBase"}
                    onClick={props.volCntrl.muteFunc}
                >Vol Mute</button>
            
            </div>

            <div className= "masterVolumeBar volBarBase"></div>
      
        </div>
    );
  }
  
  export default Fader;