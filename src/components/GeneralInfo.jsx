import React from 'react';

function GeneralInfo({ info, handleInputChange }) {
  return (
    <div className="section">
      <h2 className="section-header">General Information</h2>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          value={info.name}
          onChange={(e) => handleInputChange('generalInfo', 'name', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={info.email}
          onChange={(e) => handleInputChange('generalInfo', 'email', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Phone:</label>
        <input
          type="tel"
          value={info.phone}
          onChange={(e) => handleInputChange('generalInfo', 'phone', e.target.value)}
        />
      </div>
    </div>
  );
}

export default GeneralInfo;
