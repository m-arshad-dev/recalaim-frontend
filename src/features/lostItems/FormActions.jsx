// src/features/lostItems/components/FormActions.jsx
import React from 'react';

export const FormActions = ({ onSubmit, onCancel }) => {
  return (
    <section className="flex flex-col gap-4 pt-4">
      <button
        type="button"
        onClick={onSubmit}
        className="w-full py-4 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold text-lg shadow-lg shadow-primary/20 active:scale-[0.97] transition-all duration-200"
      >
        Submit Report
      </button>
      <button
        type="button"
        onClick={onCancel}
        className="w-full py-4 rounded-full text-primary font-headline font-bold text-base bg-transparent border-2 border-outline-variant/15 active:bg-surface-container-high transition-all"
      >
        Cancel
      </button>
    </section>
  );
};