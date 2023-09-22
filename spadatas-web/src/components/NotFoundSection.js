import React from 'react';
import './NotFoundSection.css';


function NotFoundSection() {
  return (
    <div className='not-found-container'>
      <img className='not-found-gif' src='/videos/not_found_animated_icon.png' alt="Not Found Logo" />
      <p className='not-found-text'>Oops! Looks like we couldn't find what you were looking for :(</p>
    </div>
  )
}

export default NotFoundSection;