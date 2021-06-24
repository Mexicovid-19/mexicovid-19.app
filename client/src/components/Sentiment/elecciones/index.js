import React from 'react';

import Landing from './Landing'
import Redes from './Redes'
import Phrase from './Phrase'

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

  componentDidMount() {

  }

  render() {
    const verticalSlides = [
      <Slide>
        <Landing/>
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
      <Fullpage onSlideChangeStart={this.onSlideChangeStart} onSlideChangeEnd={this.onSlideChangeEnd} {...fullPageOptions}>
      </Fullpage>
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