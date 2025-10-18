import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Upload from './pages/Upload';
import Gallery from './pages/Gallery';
import SubmitProblem from './SubmitProblem';

function App() {
  return (
    <Router>
      <div className="home" style={{ backgroundColor: '#d0f0c0', padding: '2rem' }}>
        <h1 style={{ color: '#004d00' }}>🌱 Sprout Clinic</h1>
        <nav>
          <Link to="/upload">Upload Crop Issue</Link> |{' '}
          <Link to="/gallery">Disease Gallery</Link> |{' '}
          <Link to="/submit">Submit Problem</Link>
        </nav>
        <Routes>
          <Route path="/upload" element={<Upload />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/submit" element={<SubmitProblem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
