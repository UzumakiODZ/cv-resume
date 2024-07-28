import React, { useState } from 'react';
import '../styles/EducationExperience.css';

const EducationExperience = ({ education, onEdit, onSubmit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(education);

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
    <div className="education-experience">
      <div class ="sub-head">Education Expereince</div>
      {isEditing ? (
        <div>
          <input type="text" name="school" value={formData.school} onChange={handleChange} placeholder="School Name" />
          <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title of Study" />
          <input type="text" name="date" value={formData.date} onChange={handleChange} placeholder="Date of Study" />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <p>School: {education.school}</p>
          <p>Title: {education.title}</p>
          <p>Date: {education.date}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default EducationExperience;
