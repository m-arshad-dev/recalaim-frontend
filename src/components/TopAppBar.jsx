// src/components/common/TopAppBar.jsx
import React from 'react';

export const TopAppBar = ({ title, showBackButton = false, onBackClick }) => {
  return (
    <header className="w-full sticky top-0 z-50 bg-[#f7f4de] shadow-sm shadow-[#39382b]/5 flex items-center justify-between px-6 py-4">
      {showBackButton ? (
        <button
          onClick={onBackClick}
          className="text-primary active:scale-95 transition-transform duration-200"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
      ) : (
        <div className="w-6" />
      )}
      <h1 className="font-['Epilogue'] font-bold text-xl tracking-tight text-primary">{title}</h1>
      <div className="w-6" /> {/* Spacer for balance */}
    </header>
  );
};