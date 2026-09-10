
import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="app">

      <Router>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="*" element={<Not />} />
           {/* if URL component not found then this component display on webpage */}

        </Routes>

      </Router>

    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is a Home Page</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is an About Page</p>
    </div>
  );
}

function Not() {
  return (
    <div>
      <h1>Not Found Page</h1>
      <p>Page Not Found</p>
    </div>
  );
}

export default App;

