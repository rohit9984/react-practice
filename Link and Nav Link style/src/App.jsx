import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './component/Home';
import About from './component/About';
import NaBar from './component/NaBar';
import User from './component/User';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NaBar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/user/:name" element={<User />} />

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
