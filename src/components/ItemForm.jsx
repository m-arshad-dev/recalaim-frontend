import React from "react";

const ItemForm = () => {
  return (
    <form className="space-y-10">
      {/* Item Name */}
      <div className="space-y-3">
        <label className="font-label text-xs font-extrabold text-primary tracking-wider uppercase flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">label</span>
          Item Name
        </label>
        <input
          className="w-full bg-white border-2 border-outline-variant/30 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/5 px-4 py-4 font-headline text-lg placeholder:text-outline-variant transition-all outline-none"
          placeholder="e.g. Vintage Leather Wallet"
          type="text"
        />
      </div>

      {/* Photos */}
      <div className="space-y-4">
        <label className="font-label text-xs font-extrabold text-primary tracking-wider uppercase flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">photo_library</span>
          Photos
        </label>
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2 aspect-[4/3] bg-white rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-primary/40 hover:border-primary/60 active:scale-95 transition-all group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined text-primary text-[28px]">
                add_a_photo
              </span>
            </div>
            <span className="font-label text-[10px] text-primary font-bold tracking-tight">
              UPLOAD PRIMARY
            </span>
          </div>
          <div className="space-y-3">
            <div className="aspect-square bg-white rounded-xl flex items-center justify-center border-2 border-dashed border-primary/30 hover:border-primary/50 transition-all cursor-pointer">
              <span className="material-symbols-outlined text-primary text-lg">add</span>
            </div>
            <div className="aspect-square bg-white rounded-xl flex items-center justify-center border-2 border-dashed border-primary/30 hover:border-primary/50 transition-all cursor-pointer">
              <span className="material-symbols-outlined text-primary text-lg">add</span>
            </div>
          </div>
        </div>
      </div>

      {/* Details Container */}
      <div className="bg-white rounded-2xl p-6 space-y-8 shadow-sm border border-primary/10">
        {/* Category */}
        <div className="space-y-4">
          <label className="font-label text-xs font-extrabold text-primary tracking-wider uppercase flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">category</span>
            Category
          </label>
          <select className="w-full bg-primary/5 border-2 border-outline-variant/30 rounded-xl px-4 py-4 font-headline font-semibold text-primary focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none cursor-pointer">
            <option disabled selected value="">
              Select category
            </option>
            <option value="electronics">Electronics</option>
            <option value="pets">Pets</option>
            <option value="documents">Documents</option>
            <option value="personal">Personal Items</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Date Picker */}
        <div className="space-y-3">
          <label className="font-label text-xs font-extrabold text-primary tracking-wider uppercase flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">event</span>
            When was it lost?
          </label>
          <div className="flex items-center justify-between bg-primary/5 px-4 py-4 rounded-xl border-2 border-outline-variant/30 hover:border-primary/40 transition-colors cursor-pointer group">
            <span className="text-primary font-headline font-semibold">Select Date</span>
            <span className="material-symbols-outlined text-primary">calendar_month</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-3">
        <label className="font-label text-xs font-extrabold text-primary tracking-wider uppercase flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">notes</span>
          Detailed Description
        </label>
        <textarea
          className="w-full bg-white border-2 border-outline-variant/30 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/5 px-4 py-4 font-body text-sm placeholder:text-outline-variant transition-all outline-none resize-none leading-relaxed shadow-sm"
          placeholder="Mention specific markings, last seen location, or unique features..."
          rows={5}
        ></textarea>
      </div>

      {/* Action Buttons */}
      <div className="pt-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <button
            className="py-4 rounded-xl border-2 border-primary text-primary font-headline font-bold text-base active:scale-95 transition-all"
            type="button"
          >
            Cancel
          </button>
          <button
            className="py-4 rounded-xl vibrant-gradient text-white font-headline font-bold text-base shadow-lg shadow-primary/30 active:scale-95 transition-all flex items-center justify-center gap-2"
            type="button"
          >
            Submit
            <span className="material-symbols-outlined text-sm">send</span>
          </button>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px] text-primary">lock</span>
            <span className="text-[10px] text-primary font-extrabold uppercase tracking-[0.2em]">
              Confidential Report
            </span>
          </div>
          <p className="text-center text-[10px] text-outline-variant font-label font-bold max-w-[200px]">
            Your information is only used for item recovery purposes.
          </p>
        </div>
      </div>
    </form>
  );
};

export default ItemForm;