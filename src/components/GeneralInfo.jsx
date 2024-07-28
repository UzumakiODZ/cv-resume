import React, { useState } from 'react';
import '../styles/GeneralInfo.css';

const GeneralInfo = ({ info, onEdit, onSubmit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(info);

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
    <div className="general-info">
      <div class ="sub-head">General Info</div>
      {isEditing ? (
        <div>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          
          <p>Name: {info.name}</p>
          <p>Email: {info.email}</p>
          <p>Phone: {info.phone}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;
