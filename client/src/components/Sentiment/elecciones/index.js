import React from 'react';

/* Slides */
import Landing from './Landing'
import Redes from './Redes'
import Phrase from './Phrase'
import SentimentPositividad from './SentimentPositividad.js';
import SentimentCompound from './SentimentCompound.js';
import SentimentTrust from './SentimentTrust.js';
import SentimentNegativity from './SentimentNegativity.js';
import SentimentAnticipation from './SentimentAnticipation.js';
import SentimentFear from './SentimentFear.js';
import SentimentNeutrality from './SentimentNeutrality.js';
import SentimentPolarity from './SentimentPolarity.js';
import SentimentSubjectivity from './SentimentSubjectivity.js';
import SentimentMain from './SentimentMain.js'

import { Fullpage, Slide } from 'fullpage-react';

const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 0 is default
  scrollSensitivity: 2,

  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 0 is default
  touchSensitivity: 2,
  scrollSpeed: 500,
  resetSlides: true,
  hideScrollBars: true,
  enableArrowKeys: true,

  // optional, set the initial vertical slide
  activeSlide: 0
};

class FullpageReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: {
        Fullpage: 0,
        horizontalSlider1: 0
      }
    };

    this.onSlideChangeStart = this.onSlideChangeStart.bind(this);
    this.onSlideChangeEnd = this.onSlideChangeEnd.bind(this);
  }
  
  isMobile = window.innerWidth < 1000;

  onSlideChangeStart(name) {
    if (!this.horizontalNav) {
      this.horizontalNav = document.getElementById('horizontal-nav');
    }

    if (name === 'horizontalSlider1') {
      scrollNavStart(this.horizontalNav);
    }
  }

  onSlideChangeEnd(name, newState) {
    if (name === 'horizontalSlider1') {
      scrollNavEnd(this.horizontalNav);
    }

    const oldActive = this.state.active;
    const sliderState = {
      [name]: newState.activeSlide
    };

    const updatedState = Object.assign(oldActive, sliderState);
    this.setState(updatedState);
  }

  render() {
    const verticalSlides = [
      <Slide>
        <Landing/>
      </Slide>,
      <Slide>
        <SentimentMain/>
      </Slide>,
      <Slide>
        <SentimentCompound/>
      </Slide>,
      <Slide>
        <SentimentTrust/>
      </Slide>,
      <Slide>
        <SentimentPositividad/>
      </Slide>,
      <Slide>
        <SentimentNegativity/>
      </Slide>,
      <Slide>
        <SentimentAnticipation/>
      </Slide>,
      <Slide>
        <SentimentFear/>
      </Slide>,
      <Slide>
        <SentimentNeutrality/>
      </Slide>,
      <Slide>
        <SentimentPolarity/>
      </Slide>,
      <Slide>
        <SentimentSubjectivity/>
      </Slide>,
      <Slide>
        <Redes/>
      </Slide>,
      <Slide>
        <Phrase/>
      </Slide>      
    ];
    fullPageOptions.slides = verticalSlides;

    return (
      <>
        {this.isMobile ? (
          <>
            <Landing/>
            <SentimentMain/>
            <SentimentCompound/>
            <SentimentTrust/>
            <SentimentPositividad/>
            <SentimentNegativity/>
            <SentimentAnticipation/>
            <Redes/>
            <Phrase/>
          </>
        ) : (
          <>
            <Landing/>
            <SentimentMain/>
            <SentimentCompound/>
            <SentimentTrust/>
            <SentimentPositividad/>
            <SentimentNegativity/>
            <SentimentAnticipation/>
            <Redes/>
            <Phrase/>
          </>
        )}
        {/* <Fullpage onSlideChangeStart={this.onSlideChangeStart} onSlideChangeEnd={this.onSlideChangeEnd} {...fullPageOptions}>
          </Fullpage> */}
      </>
    );
  }
}

function scrollNavStart(nav) {
  // make the nav fixed when we start scrolling horizontally
  nav.style.position = 'fixed';
}

function scrollNavEnd(nav) {
  // make the nav absolute when scroll finishes
  nav.style.position = 'absolute';
}


export default FullpageReact;