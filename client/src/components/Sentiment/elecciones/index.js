import React from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";


/* Slides */
import Landing from './Landing'
import Redes from './Redes'
import Phrase from './Phrase'
import SentimentPositividad from './SentimentPositividad.js';
import SentimentCompound from './SentimentCompound.js';
import SentimentCompoundAlt from './SentimentCompoundAlt.js';
import SentimentTrust from './SentimentTrust.js';
import SentimentNegativity from './SentimentNegativity.js';
import SentimentAnticipation from './SentimentAnticipation.js';
import SentimentFear from './SentimentFear.js';
import SentimentNeutrality from './SentimentNeutrality.js';
import SentimentPolarity from './SentimentPolarity.js';
import SentimentSubjectivity from './SentimentSubjectivity.js';
import SentimentMain from './SentimentMain.js'
import LifeOfTweet from './LifeOfTweet'


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
              <LifeOfTweet/>
              <SentimentMain/>
              <SentimentCompound/>
              <SentimentCompoundAlt/>
              <SentimentTrust/>
              <SentimentPositividad/>
              <SentimentNegativity/>
              <SentimentAnticipation/>
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
                        <LifeOfTweet/>
                      </div>
                      <div className="section">
                        <SentimentMain/>
                      </div>
                      <div className="section">
                        <SentimentCompound/>
                      </div>
                      <div className="section">
                        <SentimentCompoundAlt/>
                      </div>
                      <div className="section">
                        <SentimentAnticipation/>
                      </div>
                      <div className="section">
                        <SentimentTrust/>
                      </div>
                      <div className="section">
                        <SentimentFear/>
                      </div>
                      <div className="section">
                        <SentimentNegativity/>
                      </div>
                      <div className="section">
                        <SentimentNeutrality/>
                      </div>
                      <div className="section">
                        <SentimentPositividad/>
                      </div>
                      <div className="section">
                        <SentimentPolarity/>
                      </div>
                      <div className="section">
                        <SentimentSubjectivity/>
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