import { useState } from "react";
import { Ch5List } from "@crestron/ch5-crcomlib";


function ChannelSelector(props: any) {


    return (

        <div className="channelSelector">
            
            <div className="channelBg"></div>

            <div className="channelList">

                {
                    props.channelData.map( (channel:any) => { 
                        return(
                            <div key={channel.NAME + "Cont"} className="channelContainer">
                    
                                <img key={channel.NAME} className="channelImg" src={"ChannelIcons/" + channel.ICON} width={"100%"} height={"100%"}></img>

                                <div key={channel.NAME + "NCont"}className="channelNameContainer">
                                    <p className="channelName">{channel.NAME}</p>
                                </div>

                            </div>
                
                        )
                    })
                }
                    
            </div>

        </div>
    );
  }
  
  export default ChannelSelector;