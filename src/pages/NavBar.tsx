import React from 'react';

function NavBar(props:any) {

  return (
    <div className="navBar" style={{visibility: props.isVisible ? 'visible' : 'hidden'}}>
        <div className="navBg"></div>
        
        <div className="navButtons">
          
          {
            props.navLayers.map( (navLayer : any) => {

              
              return <button
                        key={props.navLayers.indexOf(navLayer)}        
                        id={navLayer.class}
                        className={navLayer.class + " navBtnCore"}
                        onClick={() => {navLayer.navFunc(navLayer.label)}}
                    >{navLayer.label}</button>
            })

          }
        </div>

    </div>
  );
}

export default NavBar;