// src/features/lostItems/pages/ReportLostItemPage.jsx
import React from 'react';
import { TopAppBar } from '../components/TopAppBar';

export const ReportLostItemPage = () => {
  return (
    <div className="flex flex-col h-[844px] w-[390px] mx-auto overflow-x-hidden bg-surface-container-low font-body text-on-surface antialiased">
      <TopAppBar title="Lost & Found" showBackButton />
      <main className="flex-1 px-6 pt-8 pb-8 space-y-10 overflow-y-auto hide-scrollbar">
        {/* Editorial Header Section */}
        <section className="space-y-2">
          <h2 className="font-headline font-extrabold text-3xl text-on-surface leading-tight">
            Report a <span className="text-primary italic">Lost Item</span>
          </h2>
          <p className="text-on-surface-variant text-sm max-w-[85%]">
            Fill in the details below. Our community concierge will help you reconnect with your belongings.
          </p>
        </section>

        <ReportItemForm />
      </main>
    </div>
  );
};