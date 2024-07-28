import React, { useState, forwardRef } from 'react';
import GeneralInfo from './GeneralInfo';
import EducationExperience from './EducationExperience';
import PracticalExperience from './PracticalExperience';
import '../styles/CVForm.css';

const CVForm = forwardRef((props, ref) => {
  const [generalInfo, setGeneralInfo] = useState({ name: '', email: '', phone: '' });
  const [education, setEducation] = useState({ school: '', title: '', date: '' });
  const [experience, setExperience] = useState({ company: '', position: '', responsibilities: '', from: '', until: '' });

  const handleGeneralInfoSubmit = (data) => {
    setGeneralInfo(data);
  };

  const handleEducationSubmit = (data) => {
    setEducation(data);
  };
  
  const handleExperienceSubmit = (data) => {
    setExperience(data);
  };

  return (
    <div className="cv-form" ref={ref}>
      <GeneralInfo info={generalInfo} onSubmit={handleGeneralInfoSubmit} />
      <EducationExperience education={education} onSubmit={handleEducationSubmit} />
      <PracticalExperience experience={experience} onSubmit={handleExperienceSubmit} />
    </div>
  );
});

export default CVForm;
