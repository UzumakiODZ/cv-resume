import React from 'react';

function EducationExperience({ education, handleInputChange }) {
  return (
    <div className="section">
      <h2 className="section-header">Education</h2>
      <div className="form-group">
        <label>School:</label>
        <input
          type="text"
          value={education.school}
          onChange={(e) => handleInputChange('education', 'school', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Title of Study:</label>
        <input
          type="text"
          value={education.title}
          onChange={(e) => handleInputChange('education', 'title', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Date of Study:</label>
        <input
          type="date"
          value={education.date}
          onChange={(e) => handleInputChange('education', 'date', e.target.value)}
        />
      </div>
    </div>
  );
}

export default EducationExperience;
