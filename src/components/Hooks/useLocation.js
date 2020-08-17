import React, { useEffect, useState } from 'react';

export default function useLocation() {
  const [geolocation, setLocation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLocation();
  }, []);
  async function getLocation() {
    try {
      let res = await fetch(
        'http://api.ipstack.com/95.91.211.41?access_key=663135ab40a16c0ad1b570ddb7e9531a&format=1'
      );
      let json = await res.json();
      setLocation(json);
      console.log('location hook', json);
      setLoading(false);
    } catch (err) {
      console.log('Cant get geolocation ' + err);
    }
  }
  return { geolocation, loading };
}
