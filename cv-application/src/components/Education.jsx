import { useState } from 'react';
import '../styles/Education.css';

function Education() {
  const [education, setEducation] = useState({
    schoolName: '',
    titleOfStudy: '',
    dateOfStudy: '',
  });

  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <section className="section-card education">
      <h2>Educational Experience</h2>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="schoolName">School / University:</label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={education.schoolName}
              onChange={handleChange}
              placeholder="Delhi University"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="titleOfStudy">Degree / Title of Study:</label>
            <input
              type="text"
              id="titleOfStudy"
              name="titleOfStudy"
              value={education.titleOfStudy}
              onChange={handleChange}
              placeholder="B.Tech in Computer Science"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="dateOfStudy">Date of Study (Graduation Year):</label>
            <input
              type="text"
              id="dateOfStudy"
              name="dateOfStudy"
              value={education.dateOfStudy}
              onChange={handleChange}
              placeholder="2020 - 2024"
              required
            />
          </div>

          <button type="submit" className="btn btn-submit">Submit</button>
        </form>
      ) : (
        <div className="info-display">
          <p><strong>School / University:</strong> {education.schoolName}</p>
          <p><strong>Title of Study:</strong> {education.titleOfStudy}</p>
          <p><strong>Date:</strong> {education.dateOfStudy}</p>
          <button onClick={() => setIsEditing(true)} className="btn btn-edit">Edit</button>
        </div>
      )}
    </section>
  );
}

export default Education;