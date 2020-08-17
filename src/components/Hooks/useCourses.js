import React, { useState, useEffect } from 'react';

export default function useCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCourses();
  }, []);
  async function getCourses() {
    try {
      let res = await fetch(
        'https://private-e05942-courses22.apiary-mock.com/courses'
      );
      let json = await res.json();
      setCourses(json);
      // console.log(json);
      setLoading(false);
    } catch (err) {
      console.log('Cant get data' + err);
    }
  }
  return { courses, loading };
}
