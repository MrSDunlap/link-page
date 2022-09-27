import React from 'react';
import './buttons.css';
import { AiFillInstagram } from 'react-icons/ai';
import { MdOutlineComputer } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const buttons = () => {
  return (
    <>
    <div className="buttons">
      <a href='./' className="btn style-one">
        <div className="icon"><AiFillInstagram/></div>  
        <h3>Instagram</h3>
      </a>
      <a href='./' className="btn style-two">
        <div className="icon"><MdOutlineComputer/></div>  
        <h3>Website</h3>
      </a>
      <a href='./' className="btn style-three">
        <div className="icon"><BsLinkedin/></div>  
        <h3>LinkedIn</h3>
      </a>
      <a href='./' className="btn style-four">
        <div className="icon"><BsGithub/></div>  
        <h3>GitHub</h3>
      </a>
    </div>
    </>
  )
}

export default buttons