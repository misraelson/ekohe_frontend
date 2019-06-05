import { useEffect } from 'react';
import axios from 'axios';

export default function EndpointData(endpoint, callback) {

  const fetchData = async (endpoint) => {
    try {
      const result = await axios.get(endpoint);
      if (callback) {
        callback(result.data);
      }
    } catch(err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(endpoint);
  });
};