// ApiPage.js
import React, { useEffect, useState } from 'react';

const ApiPage = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    // Make your API request here, for example:
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
      })
      .catch((error) => {
        console.error('API request error:', error);
      });
  }, []);

  return (
    <div>
      <h1>API Page</h1>
      {/* Display the API data here */}
      <pre>{JSON.stringify(apiData, null, 2)}</pre>
    </div>
  );
};

export default ApiPage;
