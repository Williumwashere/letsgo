import React from 'react';
import ReactDOM from 'react-dom/client';
import WeatherApp from './components/WeatherApp';
import FactApp from './components/FactApp';
import FormikComment from './components/FormikComment';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FactApp />
    <WeatherApp />
    <FormikComment />
  </React.StrictMode>
);