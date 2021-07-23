import React from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

/* Slides */
import Landing from './Landing'
import Redes from './Redes'
import Phrase from './Phrase'
import SentimentMain from './SentimentMain.js'
import FearVsTrust from "./FearVsTrust"
import PositivityVsNegativity from "./PositivityVsNegativity"
import CompoundPonderado from './CompoundPonderado'


class FullpageWrapper extends React.Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }
  
  isMobile = window.innerWidth < 1000;

  
  render() {
    if(this.isMobile){ 
        return (
            <>
              <Landing/>
              <SentimentMain/>
              <CompoundPonderado/>
              <FearVsTrust/>
              <PositivityVsNegativity/>                              
              <Redes/>
              <Phrase/>
            </>
        )
    } else{
        return (
           <ReactFullpage
                scrollOverflow={true}
                sectionsColor={["orange", "purple", "green"]}
                onLeave={this.onLeave.bind(this)}
                afterLoad={this.afterLoad.bind(this)}
                render={() => {
                  return (
                    <div id="fullpage-wrapper">
                      <div className="section section1">
                        <Landing/>
                      </div>
                      <div className="section">
                        <SentimentMain/>
                      </div>
                      <div className="section">
                        <CompoundPonderado/>
                      </div>
                      <div className="section">
                        <PositivityVsNegativity/>
                      </div>        
                      <div className="section">
                        <FearVsTrust/>
                      </div>                     
                      <div className="section">
                        <Redes/>
                      </div>
                      <div className="section">
                        <Phrase/>
                      </div>
                    </div>
                  );
                }}
            />   
        )
      }
    

  }
}

//ReactDOM.render(<FullpageWrapper />, document.getElementById("react-root"));

export default FullpageWrapper;