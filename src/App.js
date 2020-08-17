import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// styling
import './App.scss';
// pages
import CourseCard from './components/CourseCard/CourseCard';
import CoursePage from './components/Pages/CoursePage';
// functionality
import useCourses from './components/Hooks/useCourses';

function App() {
  const { courses, loading } = useCourses();
  return (
    <>
      <div className="wrapper">
        <Router>
          <Link to="/">
            <div className="logo"></div>
          </Link>
          <div className="banner"></div>
          <div className="main-text">
            <h1 className="heading">Choose a program</h1>
            <h2 className="heading">and transform your career</h2>

            <h3 className="heading">
              Our programs will teach you everything you need to get your first
              job in tech <br />
              in as little as 5 months—even if you don’t have any previous
              experience.
            </h3>
          </div>
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <Switch>
            <Route exact path="/"></Route>
            <Route exact path="/courses/:name">
              <CoursePage />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
