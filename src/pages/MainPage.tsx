import React, { useState } from 'react';


import {
    bridgeReceiveIntegerFromNative,
    bridgeReceiveBooleanFromNative,
    bridgeReceiveStringFromNative,
    bridgeReceiveObjectFromNative
} from "@crestron/ch5-crcomlib"

import PasscodePage from './PasscodePage';
import Header from './Header';
import NavBar from './NavBar';
import GeneralControls from './GeneralControls';
import TvPage from './TvPage';
import VolumePage from './VolumePage';
import SettingsPage from './SettingsPage';
import ConfirmationPage from './ConfirmationPage';
import CleanScreen from './CleanScreen';
import ModeControls from './ModeControls';
import RoofVolumePage from './RoofVolumePage';
import VideoSends from './VideoSendsPage';




(window as any)["bridgeReceiveIntegerFromNative"] =
    bridgeReceiveIntegerFromNative;
(window as any)["bridgeReceiveBooleanFromNative"] =
    bridgeReceiveBooleanFromNative;
(window as any)["bridgeReceiveStringFromNative"] =  
    bridgeReceiveStringFromNative;
(window as any)["bridgeReceiveObjectFromNative"] =
    bridgeReceiveObjectFromNative;


function MainPage(props: any) {

    const [dialogueVisible, setDialogueVisible] = useState(false);
    const [dialogueMessage, setDialogueMessage] = useState("");

    const dialogueConfig = {
        dialogueVisible : dialogueVisible,
        dialogueMessage : dialogueMessage,
        setDialogueVisible : setDialogueVisible,
        setDialogueMessage: setDialogueMessage,
    }

    const [passcodeVisible, setPasscodeVisible] = useState(true);
    const [gControlsVisible, setGControlsVisible] = useState(false);
    const [tvVisible, setTvVisible] = useState(false);
    const [volumeVisible, setVolumeVisible] = useState(false);
    const [roofVolumeVisible, setRoofVolumesVisible] = useState(false);
    const [settingsVisible, setSettingsVisible] = useState(false);
    const [confirmationVisible, setConfirmationVisible] = useState(false);
    const [cleanScreenVisible, setCleanScreenVisible] = useState(false);
    const [modeControlsVisible, setModeControlsVisible] = useState(false);
    const [videoSendsVisible, setVideoSendsVisible] = useState(false);

    const [currentLabel, setCurrentLabel] = useState("Bar Loft");



    
    
    
    const passcodeResults = {
        passcode_wrong : "0",
        admin_code : "1",
        tech_code : "2",
        user_code : "3",
        incorrect_length : "4",
        incorrect_format : "5",
        passcode_not_changed : "6"
    }
    
    const passcodeMsgs = {
        "0" : "Incorrect password, please try again",
        "1" : "Admin passcode successfully changed!",
        "2" : "Tech passcode successfully changed!",
        "3" : "User passcode successfully changed!",
        "4" : "Passcode not long enough, please try again",
        "5" : "Passcode in the wrong format, please try again",
        "6" : "Passcode not changed, please try again",
    }
    
    const [accessLvl, setAccessLvl] = useState(passcodeResults.user_code);
    
    const [headerVisible, setHeaderVisible] = useState(false);
    const [navBarVisible, setNavBarVisible] = useState(false);
    
    
    const shutDown = () => {
        //add any macros necessary
        toggleMainUI(false);
        setConfirmationVisible(false);
        setLayer("")
        setPasscodeVisible(true);
    }
    const logOut = () => {
        //add any macros necessary
        toggleMainUI(false);
        setConfirmationVisible(false);
        setLayer("")
        setPasscodeVisible(true);
    }

    const cleanScreen = () => {
        setCleanScreenVisible(true);
        toggleMainUI(false)
        setSettingsVisible(false);
    }
    
    const stopCleaning = () => {
        setCleanScreenVisible(false);
        toggleMainUI(true)
        setSettingsVisible(true);
    }

    
    const confirmShutDown =() => {
        setConfirmationVisible(true);
    }
    const navLayers = [
        {
            label : "General Controls",
            class : "gControlsNav",
            accessLvl : passcodeResults.user_code,
            visFunc : setGControlsVisible,
            navFunc : setLayer
        },
        {
            label : "TV Controls",
            class : "tvNav",
            accessLvl : passcodeResults.user_code,
            visFunc : setTvVisible,
            navFunc : setLayer
        },
        {
            label : "Settings",
            class : "settingsNav",
            accessLvl : passcodeResults.user_code,
            visFunc : setSettingsVisible,
            navFunc : setLayer
        },
        {
            label : "Shut Down",
            class : "shutDown",
            accessLvl : passcodeResults.user_code,
            visFunc : ()=>{},
            navFunc : confirmShutDown
        }
    ]
    const navLayersAdmin = [
        {
            label : "General Controls",
            class : "gControlsNav",
            accessLvl : passcodeResults.user_code,
            visFunc : setGControlsVisible,
            navFunc : setAdminLayer
        },
        {
            label : "TV Controls",
            class : "tvNav",
            accessLvl : passcodeResults.user_code,
            visFunc : setTvVisible,
            navFunc : setAdminLayer
        },
        {
            label : "Volume Controls",
            class : "volumeNav",
            accessLvl : passcodeResults.admin_code,
            visFunc : setVolumeVisible,
            navFunc : setAdminLayer
        },
        {
            label : "Settings",
            class : "settingsNav",
            accessLvl : passcodeResults.user_code,
            visFunc : setSettingsVisible,
            navFunc : setAdminLayer
        },
        {
            label : "Shut Down",
            class : "shutDown",
            accessLvl : passcodeResults.user_code,
            visFunc : ()=>{},
            navFunc : confirmShutDown
        }
    ]
    
    const [currentNavLayers, setCurrentNavLayers] = useState(navLayers);
    
    const navLayersRoof = [
        {
            label : "Mode Controls",
            class : "modesNav",
            accessLvl : passcodeResults.user_code,
            visFunc : setModeControlsVisible,
            navFunc : setRoofLayer
        },
        {
            label : "Volume Controls",
            class : "volumeNav",
            accessLvl : passcodeResults.user_code,
            visFunc : setRoofVolumesVisible,
            navFunc : setRoofLayer
        },
        {
            label : "Video Sends",
            class : "videoSendsNav",
            accessLvl : passcodeResults.user_code,
            visFunc : setVideoSendsVisible,
            navFunc : setRoofLayer
        },
        {
            label : "Settings",
            class : "settingsNav",
            accessLvl : passcodeResults.user_code,
            visFunc : setSettingsVisible,
            navFunc : setAdminLayer
        },
        {
            label : "Shut Down",
            class : "shutDown",
            accessLvl : passcodeResults.user_code,
            visFunc : ()=>{},
            navFunc : confirmShutDown
        }
    ]
    
    const PasscodeSignals = {
        verifyPasscode : "111",
        changePasscode : "112",
    }
    
    
    const passcodeCorrect = () => {
        toggleMainUI(true);
        setPasscodeVisible(false);
    }
 
    function setLayer (layer:string){

        navLayers.map( (navBtn : any) => {
            navBtn.visFunc( navBtn.label === layer )
        })
    }
    function setAdminLayer (layer:string){

        navLayersAdmin.map( (navBtn : any) => {
            navBtn.visFunc( navBtn.label === layer )
        })
    }
    function setRoofLayer (layer:string){

        navLayersRoof.map( (navBtn : any) => {
            navBtn.visFunc( navBtn.label === layer )
        })
    }

    function toggleMainUI(toggle:boolean){
        setNavBarVisible(toggle);
        setHeaderVisible(toggle);
    }




    return(
        <>

        <PasscodePage isVisible={passcodeVisible} userNavLayers={navLayers} adminNavLayers={navLayersAdmin} setCurrentNavLayers={setCurrentNavLayers} passcodeCorrect={passcodeCorrect} dialogueConfig={dialogueConfig} passcodeSignals={PasscodeSignals} passcodeResults={passcodeResults}passcodeMsgs={passcodeMsgs} accessLvl={accessLvl} setAccessLvl={setAccessLvl}></PasscodePage>

        <ConfirmationPage isVisible={confirmationVisible} cancelShutDown={setConfirmationVisible} shutDown={shutDown}></ConfirmationPage>


        <GeneralControls isVisible={gControlsVisible}></GeneralControls>

        <TvPage isVisible={tvVisible}></TvPage>

        <VolumePage isVisible={volumeVisible}></VolumePage>

        <RoofVolumePage isVisible={roofVolumeVisible}></RoofVolumePage>

        <VideoSends isVisible={videoSendsVisible}></VideoSends>

        <SettingsPage isVisible={settingsVisible} setCurrentLabel={setCurrentLabel} logOut={logOut} cleanScreen={cleanScreen} stopCleaning={stopCleaning} userNavLayers={navLayers} adminNavLayers={navLayersAdmin} roofNavLayers={navLayersRoof} setCurrentNavLayers={setCurrentNavLayers} passcodeCorrect={passcodeCorrect} dialogueConfig={dialogueConfig}  passcodeSignals={PasscodeSignals} passcodeResults={passcodeResults} passcodeMsgs={passcodeMsgs} accessLvl={accessLvl} setAccessLvl={setAccessLvl}></SettingsPage>

        <ModeControls isVisible={modeControlsVisible}></ModeControls>

        <Header isVisible={headerVisible} currentLabel={currentLabel}></Header>
        <NavBar isVisible={navBarVisible} navLayers={currentNavLayers} accessLvl={accessLvl} passcodeResults={passcodeResults} toggleMUI={toggleMainUI}></NavBar>
        
        <CleanScreen isVisible={cleanScreenVisible}></CleanScreen>


        </>
    );
}

export default MainPage;