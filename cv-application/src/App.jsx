import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>CV / Résumé Builder</h1>
        <p>Fill out the sections below and hit Submit to preview your CV.</p>
      </header>

      <main className="cv-content">
        <GeneralInfo />
        <Education />
        <Experience />
      </main>
    </div>
  );
}

export default App;