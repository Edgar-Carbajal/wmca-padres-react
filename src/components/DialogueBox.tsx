function DialogueBox(props: any) {


    return (
        <div className="dialogueBg" style={{visibility: props.isVisible ? 'visible' : 'hidden'}}>

            <p className="dialogueMsg">{props.message}</p>
        
        </div>
    );

}

export default DialogueBox;