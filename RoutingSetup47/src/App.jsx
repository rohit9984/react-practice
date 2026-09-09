import { BrowserRouter as Router, Link, Route, Routes, BrowserRouter } from "react-router-dom"; 

// Router is the short form of BrowserRouter


import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Link to="/home">Home Page</Link>
        <br />

        <Link to="/about">About Page</Link>

        <Routes>
          {/* checks which route matches the current URL */}

          <Route path="/home" element={<Home />} />
          {/* <Route> → tells React what component to show for that URL
                    For example, if the URL is:

                      /home */}

          <Route path="/about" element={<About/>} />

          {/* <Route path="/about">{<About />}</Route> why not use this method because this method is not use in React Router v6 or v */}
        </Routes>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is a home page</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is an about page</p>
    </div>
  );
}

export default App;
