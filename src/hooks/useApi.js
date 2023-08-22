import { useState, useEffect } from 'react';
import axios from 'axios';

export function useApi(url, params) {
   const [response, setResponse] = useState(null);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);

   const fetchData = async () => {
      setLoading(true);
      try {
         const res = await axios.request(url, params);
         setResponse(res.data);
         setError(null);
      } catch (err) {
         setError(err);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      fetchData();
   }, []);

   return { response, error, loading };
};