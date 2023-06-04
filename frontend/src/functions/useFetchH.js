import { useState, useEffect } from 'react';

const useFetch = (url, headers) => {
 // console.log(url)
 
 headers = headers.header
 // console.log(headers)
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

      fetch(url, { headers })
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        }
      })
    

    // abort the fetch
    return () => abortCont.abort();
  }, [url])

  return { data, isPending, error };
}
 
export default useFetch;




// import { useState, useEffect } from 'react';

// const useFetch = (url, headers = {}) => {
//   const [data, setData] = useState(null);
//   const [isPending, setIsPending] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const abortCont = new AbortController();

//     const fetchData = async () => {
//       try {
//         const response = await fetch(url, {
//           headers: headers,
//           signal: abortCont.signal
//         });

//         if (!response.ok) {
//           throw new Error('Could not fetch the data for that resource');
//         }

//         const responseData = await response.json();
//         setData(responseData);
//         setError(null);
//         setIsPending(false);
//       } catch (err) {
//         if (err.name === 'AbortError') {
//           console.log('Fetch aborted');
//         } else {
//           setIsPending(false);
//           setError(err.message);
//         }
//       }
//     };

//     fetchData();

//     return () => {
//       abortCont.abort();
//     };
//   }, [url, headers]);

//   return { data, isPending, error };
// };

// export default useFetch;


