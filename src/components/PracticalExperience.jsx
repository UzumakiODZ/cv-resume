import React, { useState } from 'react';
import '../styles/PracticalExperience.css';

const PracticalExperience = ({ experience, onEdit, onSubmit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(experience);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setIsEditing(false);
  };

  return (
    <div className="practical-experience">
      <div class ="sub-head">Practical Expereince</div>
      {isEditing ? (
        <div>
          <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" />
          <input type="text" name="position" value={formData.position} onChange={handleChange} placeholder="Position Title" />
          <textarea name="responsibilities" value={formData.responsibilities} onChange={handleChange} placeholder="Main Responsibilities" />
          <input type="text" name="from" value={formData.from} onChange={handleChange} placeholder="From" />
          <input type="text" name="until" value={formData.until} onChange={handleChange} placeholder="Until" />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <p>Company: {experience.company}</p>
          <p>Position: {experience.position}</p>
          <p>Responsibilities: {experience.responsibilities}</p>
          <p>From: {experience.from}</p>
          <p>Until: {experience.until}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default PracticalExperience;
