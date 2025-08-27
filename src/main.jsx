import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Landing from './Landing';
import AndroidBeta from './AndroidBeta';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const navigateToAndroidBeta = () => {
    setCurrentPage('android-beta');
  };

  const navigateToLanding = () => {
    setCurrentPage('landing');
  };

  // Pass navigation functions to components via props or context
  if (currentPage === 'android-beta') {
    return <AndroidBeta onNavigateHome={navigateToLanding} />;
  }

  return <Landing onNavigateToAndroidBeta={navigateToAndroidBeta} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);