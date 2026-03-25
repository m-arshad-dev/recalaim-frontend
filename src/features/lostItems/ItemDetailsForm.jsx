// src/features/lostItems/components/ItemDetailsForm.jsx
import React from 'react';

export const ItemDetailsForm = ({ formData, onChange }) => {
  return (
    <section className="space-y-6">
      {/* Lost Item Name */}
      <div className="space-y-1.5">
        <label className="text-[11px] font-bold font-label uppercase tracking-widest text-on-surface-variant ml-1">
          Lost Item Name
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={onChange}
          className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all outline-none font-medium"
          placeholder="e.g. Vintage Leather Wallet"
        />
      </div>

      {/* Category & Location Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold font-label uppercase tracking-widest text-on-surface-variant ml-1">
            Category
          </label>
          <div className="relative">
            <select
              name="category"
              value={formData.category}
              onChange={onChange}
              className="w-full appearance-none bg-surface-container-highest border-none rounded-xl px-4 py-4 text-on-surface focus:ring-2 focus:ring-primary transition-all outline-none font-medium pr-10"
            >
              <option>Electronics</option>
              <option>Pets</option>
              <option>Documents</option>
              <option>Accessories</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
              expand_more
            </span>
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold font-label uppercase tracking-widest text-on-surface-variant ml-1">
            Location
          </label>
          <div className="relative">
            <select
              name="location"
              value={formData.location}
              onChange={onChange}
              className="w-full appearance-none bg-surface-container-highest border-none rounded-xl px-4 py-4 text-on-surface focus:ring-2 focus:ring-primary transition-all outline-none font-medium pr-10"
            >
              <option>Brooklyn</option>
              <option>Manhattan</option>
              <option>Queens</option>
              <option>The Bronx</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
              location_on
            </span>
          </div>
        </div>
      </div>

      {/* Lost Date */}
      <div className="space-y-1.5">
        <label className="text-[11px] font-bold font-label uppercase tracking-widest text-on-surface-variant ml-1">
          Lost Date
        </label>
        <div className="relative">
          <input
            type="date"
            name="lostDate"
            value={formData.lostDate}
            onChange={onChange}
            className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-4 text-on-surface focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all outline-none font-medium"
          />
        </div>
      </div>

      {/* Description */}
      <div className="space-y-1.5">
        <label className="text-[11px] font-bold font-label uppercase tracking-widest text-on-surface-variant ml-1">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={onChange}
          rows={4}
          className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all outline-none font-medium resize-none"
          placeholder="Mention unique marks, stickers, or contents..."
        ></textarea>
      </div>
    </section>
  );
};