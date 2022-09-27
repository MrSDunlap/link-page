import React from 'react';
import './nav.css';

const nav = () => {
  return (
    <>
        <div className="nav-container">
            <div className="nav-links">
                <div className="nav-header">
                    <div className="nav-image"></div>
                    <div className="nav-header-details">
                        <div className="nav-profile-name">s_dnlp</div>
                        <div className="nav-pronouns">(he/him/his)</div>
                    </div>
                </div>
                <span className='separation'></span>
                <div className="main-items">
                    <a href="./" className="nav-link">Customization</a>
                    <a href="./" className="nav-link">Analytics</a>
                </div>
                <div className="nav-footer">
                    <a href="./" className="nav-link">Settings</a>
                    <a href="./" className="nav-link logout">Log Out</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default nav