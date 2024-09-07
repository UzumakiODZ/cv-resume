import React, { useState, forwardRef } from 'react';
import GeneralInfo from './GeneralInfo';
import EducationExperience from './EducationExperience';
import PracticalExperience from './PracticalExperience';

const CVForm = forwardRef((props, ref) => {
  const [generalInfo, setGeneralInfo] = useState({ name: '', email: '', phone: '' });
  const [education, setEducation] = useState({ school: '', title: '', date: '' });
  const [experience, setExperience] = useState({ company: '', position: '', responsibilities: '', from: '', until: '' });

  // Handle input changes
  const handleInputChange = (section, field, value) => {
    if (section === 'generalInfo') setGeneralInfo({ ...generalInfo, [field]: value });
    if (section === 'education') setEducation({ ...education, [field]: value });
    if (section === 'experience') setExperience({ ...experience, [field]: value });
  };

  return (
    <div className="cv-form terra-print" ref={ref}>
      <GeneralInfo info={generalInfo} handleInputChange={handleInputChange} />
      <EducationExperience education={education} handleInputChange={handleInputChange} />
      <PracticalExperience experience={experience} handleInputChange={handleInputChange} />
    </div>
  );
});

export default CVForm;
