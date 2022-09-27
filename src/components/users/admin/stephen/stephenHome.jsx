import React, { Children } from 'react';
import './stephenHome.css';
import '../../../main-content/navigation/nav.css';
import { FaEdit } from 'react-icons/fa'

function menuClick() {
  let menu = document.getElementsByClassName('nav-container');

  menu.classList.toggle('slide-in');
}
const stephenHome = () => {

  let rotation = ()=> {
    
    let burger = document.getElementsByClassName('nav-burger');
    let top = document.getElementsByClassName('bar-one');
    let mid = document.getElementsByClassName('bar-two');
    let low = document.getElementsByClassName('bar-three');

    burger.addEventListener('click', ()=> {
      top.classList.toggle('bar-top');
      mid.className.toggle('bar-mid');
      low.classList.toggle('bar-low');
    })

  }
  return (
      <div className="stephen">
        <span className="bg-gradient"></span>
        <div className='nav-burger' onClick={menuClick}>
          <span className="bar bar-one"></span>
          <span className="bar bar-two"></span>
          <span className="bar bar-three"></span>
        </div>
        <div className="headshot-container">
          <div className="image">
          <a href="./" className="edit-box">
            <div className="edit-icon">
              <FaEdit/>
            </div>
          </a>
        </div>
        </div>
        <div className="information">
          <div className="username">@s_dnlp</div>
          <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tenetur quisquam culpa, magni quo voluptate ipsa blanditiis rem!</div>
        </div>
        <div className="link-array">
          <a href="./" className='btn style-three'>Link One</a>
          <a href="./" className='btn style-three'>Link One</a>
          <a href="./" className='btn style-three'>Link One</a>
          <a href="./" className='btn style-three'>Link One</a>
        </div>
        <div className="cta">
          <div className="cta-header">Want to design your very own personalized link page?</div>
          <a href="./" className="cta-btn">Contact Us</a>
        </div>
        <p className="footer">Designed and developed by Stephen Dunlap & Clifford Chirwa</p>
        
      </div>
  )
}

export default stephenHome;