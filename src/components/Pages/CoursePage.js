import React from 'react';
// style
import './CoursePage.scss';
import './CoursePage.scss';

import Alexa from '../../pics/alexa.jpg';
import Immersion from '../../pics/immersion.jpg';
// func
import { useParams } from 'react-router';
import useLocation from '../Hooks/useLocation';
import { useHistory } from 'react-router';

export default function CoursePage() {
  const { geolocation, setLocation } = useLocation();
  console.log('geolocation', geolocation);

  const { title } = useParams();
  const history = useHistory();
  let nextStart = history.location.state.course.next_start;

  let slug = history.location.state.course.slug;
  // HERE SLUG TO NEXT FETCH
  console.log('slug', slug);
  return (
    <>
      <div className="course-details-wrap">
        hello {title}
        <div
          style={{
            backgroundImage:
              title === 'Voice User Interface Design'
                ? `url(${Alexa})`
                : `url(${Immersion})`,
          }}
          className="course-page-pic"
        ></div>
        <h1 className="details-header"> {title}</h1>
        <div className="date-price">
          <div className="dates">
            <h2>Limited to 25 spots, get yours now!</h2>
            <h3 className="start-date">Course starts on {nextStart}</h3>
            <p>
              Next start dates : <br /> ____
              <br />
              ______
            </p>
          </div>
          <div className="price-wrap">
            <h2>Our payment options </h2>
            <div className="price">
              <div className="mothly-payment">
                <p className="label"> MOST POPULAR </p> Monthly payment plan{' '}
                <br />
                {/* {isEurope === 'EU' ? '€' : '$'} 500.00 x 4{' '} */}
              </div>
              <div className="one-payment ">
                <p className="label"> BEST DEAL</p>
                One time payment <br />
                {/* {isEurope === 'EU' ? '€' : '$'} 25.000 x 1 <br /> save{' '} */}
                {/* {countDiscount(5000)} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
