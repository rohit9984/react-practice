import { useState } from 'react';
import '../styles/Experience.css';

function Experience() {
  const [experience, setExperience] = useState({
    companyName: '',
    positionTitle: '',
    responsibilities: '',
    dateFrom: '',
    dateUntil: '',
  });

  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <section className="section-card experience">
      <h2>Practical Experience</h2>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="companyName">Company Name:</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={experience.companyName}
              onChange={handleChange}
              placeholder="Tech Corp"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="positionTitle">Position Title:</label>
            <input
              type="text"
              id="positionTitle"
              name="positionTitle"
              value={experience.positionTitle}
              onChange={handleChange}
              placeholder="Frontend Developer"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="responsibilities">Main Responsibilities:</label>
            <textarea
              id="responsibilities"
              name="responsibilities"
              value={experience.responsibilities}
              onChange={handleChange}
              placeholder="Built responsive UI components using React and Vite..."
              rows="4"
              required
            />
          </div>

          <div className="date-group">
            <div className="form-group">
              <label htmlFor="dateFrom">From:</label>
              <input
                type="date"
                id="dateFrom"
                name="dateFrom"
                value={experience.dateFrom}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="dateUntil">Until:</label>
              <input
                type="date"
                id="dateUntil"
                name="dateUntil"
                value={experience.dateUntil}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-submit">Submit</button>
        </form>
      ) : (
        <div className="info-display">
          <p><strong>Company:</strong> {experience.companyName}</p>
          <p><strong>Position:</strong> {experience.positionTitle}</p>
          <p><strong>Responsibilities:</strong> {experience.responsibilities}</p>
          <p><strong>Duration:</strong> {experience.dateFrom} to {experience.dateUntil}</p>
          <button onClick={() => setIsEditing(true)} className="btn btn-edit">Edit</button>
        </div>
      )}
    </section>
  );
}

export default Experience;