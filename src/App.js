import React from 'react';
import './App.css';
import MyResponsiveCalendar from './Visualization';

function App() {
  return (
    <div className="viz-container">
      <h1><b>Fatal</b> Police Shootings in the US (2015-2020)</h1>
      <MyResponsiveCalendar />
      <p>Created by https://github.com/LiuAllan</p>
      <p>Dataset obtained from https://www.kaggle.com/andrewmvd/police-deadly-force-usage-us/data?select=fatal-police-shootings-data.csv</p>
    </div>
  );
}

export default App;
