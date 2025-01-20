import React from 'react';


function ConfirmationPage(props:any) {

    return (
        <div className="confirmationPage" id="confirmationPage" style={{visibility: props.isVisible ? 'visible' : 'hidden'}}>

            <div id="backBox" className="backBox"></div>

            <div className="confirmationBg bgBase">
                <p
                    id="confirmationLabel"
                    className="confirmationLabel"
                >Confirm Shut Down:</p>
                <button
                    id="shutDownConfirm"
                    className="shutDownConfirm btnBase pwrOnBase"
                    onClick={props.shutDown}
                >Shut Down</button>
                <button
                    id="shutDownCancel"
                    className="shutDownCancel btnBase pwrOffBase"
                    onClick={() => {props.cancelShutDown(false)}}
                >Cancel</button>
            </div>
        </div>
    );
  }
  
  export default ConfirmationPage;