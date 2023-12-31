import React from 'react';
import '../../App.css';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import {Button3} from './postingButton';

function HomeSection() {
    return (
        <div className='hero-container'>
            {/* TODO: change this video or none at all, just lil graphics */}
        <video src='/videos/video-3.mp4' autoPlay loop muted /> 
        <h1>WELCOME HOME</h1>
        {/* TODO: something better here */}
        <p>Your research is looking good</p>
        <div className='hero-btns'>
          <Button3
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            <Link to='/post-form'></Link>
            List a New Study! 
          </Button3>
          {/* <Button2 */}
            {/* // className='btns' */}
            {/* // buttonStyle='btn--primary' */}
            {/* // buttonSize='btn--large' */}
            {/* // onClick={console.log('hey')} */}
        {/* //   > */}
             {/* <Link to='/post-form'></Link> */}
            {/* List a new study!  */}
          {/* </Button2> */}
        </div>
      </div>
    );
  }
  
export default HomeSection;
    