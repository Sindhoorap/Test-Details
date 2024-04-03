import React, { useState, useEffect } from 'react';

function App() {
  const [testDetails, setTestDetails] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        setTestDetails(data.testDetails);
        console.log(data.testDetails); // Check if data is fetched correctly
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  

  const updateData = newData => {
    setTestDetails(newData);
  };

  return (
    <div>
      <h1>Test Details</h1>
      <button onClick={() => updateData([{ TestId: 4, Description: "New Description", Test: "New Test", PeakNumber: 5, PeakDuration: "New Duration", ValidTestRun: true, Status: "New Status" }])}>
        Update Data
      </button>
      <table>
  <tbody>
    {testDetails.length > 0 && Object.keys(testDetails[0]).map(key => (
      <tr key={key}>
        <td>{key}</td>
      
        <td>{testDetails[0][key]}</td>
      </tr>
    ))}
  </tbody>
</table>


    </div>
  );
}

export default App;
