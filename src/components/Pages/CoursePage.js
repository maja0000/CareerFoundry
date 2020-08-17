import React, { useState, useEffect } from 'react';
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
  let isEurope = geolocation.continent_code;
  // console.log(isEurope);
  const [details, setDetails] = useState();

  // console.log('geolocation', geolocation);

  const { title } = useParams();
  const history = useHistory();
  let nextStart = history.location.state.course.next_start;

  let slug = history.location.state.course.slug;
  // HERE SLUG TO NEXT FETCH
  // console.log('slug outside the function ->', slug);

  useEffect(() => {
    let slug = history.location.state.course.slug;
    getDetails(slug);
  }, [slug]);

  async function getDetails(slug) {
    // console.log('slug inside the getDetails', slug);
    try {
      let res = await fetch(
        `https://private-e05942-courses22.apiary-mock.com/courses/${slug}`
      );

      let json = await res.json();
      setDetails(json);
      console.log('details ->', json);
    } catch (err) {
      console.log('ERROR ' + err);
    }
  }

  // getDetails(slug);
  function countDiscount(fullPrice) {
    return (5 / 100) * fullPrice;
  }
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
              Next start dates : <br />
              {details
                ? details.start_dates
                    .slice(1, 3)
                    .map((date, idx) => <li key={idx}>{date}</li>)
                : 'Loading...'}
              <br />
            </p>
          </div>
          <div className="price-wrap">
            <h2>Our payment options </h2>
            <div className="price">
              <div className="mothly-payment">
                <p className="label"> MOST POPULAR </p> Monthly payment plan{' '}
                <br />
                {isEurope === 'EU' ? '€' : '$'} 500.00 x 4{' '}
              </div>
              <div className="one-payment ">
                <p className="label"> BEST DEAL</p>
                One time payment <br />
                {isEurope === 'EU' ? '€' : '$'}
                {/* {details
                ? details.prices 
                    .map((date, idx) => <li key={idx}>{date}</li>)
                : 'Loading...'}
                 x 1 <br /> save{' '}
                {countDiscount(5000)} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
