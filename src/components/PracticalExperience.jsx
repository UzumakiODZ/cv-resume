import React from 'react';

function PracticalExperience({ experience, handleInputChange }) {
  return (
    <div className="section">
      <h2 className="section-header">Practical Experience</h2>
      <div className="form-group">
        <label>Company:</label>
        <input
          type="text"
          value={experience.company}
          onChange={(e) => handleInputChange('experience', 'company', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Position:</label>
        <input
          type="text"
          value={experience.position}
          onChange={(e) => handleInputChange('experience', 'position', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Responsibilities:</label>
        <textarea
          value={experience.responsibilities}
          onChange={(e) => handleInputChange('experience', 'responsibilities', e.target.value)}
        ></textarea>
      </div>
      <div className="form-group">
        <label>From:</label>
        <input
          type="date"
          value={experience.from}
          onChange={(e) => handleInputChange('experience', 'from', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Until:</label>
        <input
          type="date"
          value={experience.until}
          onChange={(e) => handleInputChange('experience', 'until', e.target.value)}
        />
      </div>
    </div>
  );
}

export default PracticalExperience;
