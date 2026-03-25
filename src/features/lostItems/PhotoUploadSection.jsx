// src/features/lostItems/components/PhotoUploadSection.jsx
import React from 'react';

export const PhotoUploadSection = () => {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-headline font-bold text-lg text-on-surface">Add Photos</h3>
        <span className="text-[10px] font-medium font-label uppercase tracking-widest text-primary">Required</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {/* Main Large Upload Slot (Asymmetric) */}
        <div className="col-span-2 aspect-[4/3] relative rounded-xl bg-surface-container-highest border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center group active:scale-[0.98] transition-all cursor-pointer">
          <div className="flex flex-col items-center text-on-surface-variant group-hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-4xl mb-2">add_a_photo</span>
            <span className="text-xs font-semibold">Primary Image</span>
          </div>
        </div>
        {/* Secondary Small Slot */}
        <div className="col-span-1 flex flex-col gap-3">
          <div className="flex-1 aspect-square rounded-xl bg-surface-container-high border-2 border-dashed border-outline-variant/30 flex items-center justify-center text-on-surface-variant cursor-pointer">
            <span className="material-symbols-outlined text-2xl">add</span>
          </div>
          <div className="flex-1 aspect-square rounded-xl bg-surface-container-high border-2 border-dashed border-outline-variant/30 flex items-center justify-center text-on-surface-variant cursor-pointer">
            <span className="material-symbols-outlined text-2xl">add</span>
          </div>
        </div>
      </div>
    </section>
  );
};