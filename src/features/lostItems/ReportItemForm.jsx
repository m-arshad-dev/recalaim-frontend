// src/features/lostItems/components/ReportItemForm.jsx
import React, { useState } from 'react';
import { PhotoUploadSection } from './PhotoUploadSection';
import { ItemDetailsForm } from './ItemDetailsForm';
import { FormActions } from './FormActions';

export const ReportItemForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Electronics',
    location: 'Brooklyn',
    lostDate: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleCancel = () => {
    // Handle cancel logic (e.g., navigate back)
    console.log('Form cancelled');
  };

  return (
    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
      <PhotoUploadSection />
      <ItemDetailsForm formData={formData} onChange={handleChange} />
      <FormActions onSubmit={handleSubmit} onCancel={handleCancel} />
    </form>
  );
};