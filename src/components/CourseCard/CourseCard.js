import React from 'react';
// styling
import './CourseCard.scss';
import Alexa from '../../pics/alexa.jpg';
import Immersion from '../../pics/immersion.jpg';

export default function CourseCard() {
  return (
    <>
      <div className="card-container">
        <div className="card-title">TITLE??</div>
        <div className="card-title">DESCRIPTION HERE??</div>
        <div
          className="card-pic"
          style={{ backgroundImage: `url(${Alexa})` }}
        ></div>
      </div>
    </>
  );
}
