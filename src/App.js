import React, { useState } from 'react';
import './App.css';

function App() {
  const [dinnerPlan, setDinnerPlan] = useState([]);

  const fetchDinnerPlan = async () => {
    // Update this URL to point to your serverless function
    const response = await fetch('URL_OF_YOUR_SERVERLESS_FUNCTION');
    const data = await response.json();
    setDinnerPlan(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weekly Dinner Plan</h1>
        <button onClick={fetchDinnerPlan}>Get Dinner Plan</button>
        {dinnerPlan.length > 0 && (
          <ul>
            {dinnerPlan.map((meal, index) => (
              <li key={index}>{meal}</li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
}

export default App;
