import React from 'react';
import Home from './components/Home';
import LoginSignup from './components/LoginSignup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Join from './components/Join';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Define the route for the LoginSignup component */}
          <Route path="/loginsignup" element={<LoginSignup />} />
          <Route path="/join" element={<Join />} />
          {/* Default route for the Home component */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




