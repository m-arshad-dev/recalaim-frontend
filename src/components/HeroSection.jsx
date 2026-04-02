import React from "react";

const HeroSection = () => {
  return (
    <section className="space-y-2">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        <span className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">
          New Report
        </span>
      </div>
      <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface">
        Tell us what's missing.
      </h2>
      <p className="text-on-surface-variant text-sm leading-relaxed">
        Provide as much detail as possible to help our community identify your item.
      </p>
    </section>
  );
};

export default HeroSection;