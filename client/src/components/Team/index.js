import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Header from '../Header/';
import Footer from '../Footer/';

const Team = ({classes}) => {
  
  return (
    <div className="App">
      <Header isFixed={true}/>
      <Footer/>
    </div>
    );
}

export default Team;