import { useState } from 'react';
import '../styles/GeneralInfo.css';

function GeneralInfo() {
  // State 1: Form data store karne ke liye
  const [info, setInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  // State 2: Edit mode track karne ke liye
  const [isEditing, setIsEditing] = useState(true);

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false); // Form hide karke preview mode on karein
  };

  // Edit handler
  const handleEdit = () => {
    setIsEditing(true); // Preview hide karke form mode on karein
  };

  return (
    <section className="section-card general-info">
      <h2>General Information</h2>

      {isEditing ? (
        // EDIT MODE: Form dikhega
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={info.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={info.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={info.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
              required
            />
          </div>

          <button type="submit" className="btn btn-submit">Submit</button>
        </form>
      ) : (
        // DISPLAY / PREVIEW MODE: HTML text format me data dikhega
        <div className="info-display">
          <p><strong>Name:</strong> {info.fullName}</p>
          <p><strong>Email:</strong> {info.email}</p>
          <p><strong>Phone:</strong> {info.phone}</p>
          <button onClick={handleEdit} className="btn btn-edit">Edit</button>
        </div>
      )}
    </section>
  );
}

export default GeneralInfo;