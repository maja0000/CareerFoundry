import React from 'react';
// styling
import './CourseCard.scss';
import Alexa from '../../pics/alexa.jpg';
import Immersion from '../../pics/immersion.jpg';

export default function CourseCard({ course }) {
  return (
    <>
      <div className="card-container">
        <div className="card-title">{course.title}</div>

        <div
          className="card-pic"
          style={{
            backgroundImage:
              course.title === 'Voice User Interface Design'
                ? `url(${Alexa})`
                : `url(${Immersion})`,
          }}
        >
          <p className="job-guarantee">JOB GUARANTEE</p>
        </div>
      </div>
    </>
  );
}
