import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';
import './main.css';
// import ''


const Home = lazy(() => import('./Pages/HomePage'));
const Service = lazy(() => import('./Pages/ServiceDetail'));

function App() {
  return (
    <Router>
      <div>
        <Suspense fallback={<div className="suspense-fallback-container"><Spin size="large" /></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
