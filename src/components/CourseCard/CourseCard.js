import React from 'react';
// styling
import './CourseCard.scss';
import Alexa from '../../pics/alexa.jpg';
import Immersion from '../../pics/immersion.jpg';

export default function CourseCard({ course }) {
  console.log('from the card!!!', course);
  return (
    <>
      <div className="card-container">
        <div className="card-title">{course.title}</div>
        <div className="card-title">DESCRIPTION HERE??</div>
        <div
          className="card-pic"
          style={{
            backgroundImage:
              course.title === 'Voice User Interface Design'
                ? `url(${Alexa})`
                : `url(${Immersion})`,
          }}
        ></div>
      </div>
    </>
  );
}
