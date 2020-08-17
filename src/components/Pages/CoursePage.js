import React from 'react';
// style
import './CoursePage.scss';
import Alexa from '../../pics/alexa.jpg';
import Immersion from '../../pics/immersion.jpg';
// func
import { useParams } from 'react-router';
import useLocation from '../Hooks/useLocation';

export default function CoursePage() {
  const { geolocation, setLocation } = useLocation();
  console.log('geolocation', geolocation);
  const { name } = useParams();
  console.log('from the page', name);
  return (
    <>
      <div className="course-details-wrap">
        <div
        // style={{
        //   backgroundImage:
        //     course.title === 'Voice User Interface Design'
        //       ? `url(${Alexa})`
        //       : `url(${Immersion})`,
        // }}
        ></div>
      </div>
    </>
  );
}
