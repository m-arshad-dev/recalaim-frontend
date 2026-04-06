import React from "react";
import useReportItemForm from "../features/lostItems/ReportItemForm";

const ReportFoundItemPage = () => {
  const {
    formData,
    handleChange,
    handleImageChange,
    handleSubmit,
    handleCancel,
  } = useReportItemForm("found");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
  <form
    onSubmit={handleSubmit}
    className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl p-8 w-full max-w-lg border border-white/20 transition-all duration-300 hover:shadow-xl"
  >
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Report Lost Item
      </h2>
      <p className="text-gray-500 mt-2">Help us find what you've lost</p>
    </div>

    <div className="space-y-4">
      <div className="group">
        <label className="block text-sm font-medium text-gray-700 mb-2">User ID</label>
        <input
          type="text"
          name="user_id"
          placeholder="Enter your user ID"
          value={formData.user_id}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none bg-gray-50/50 group-hover:bg-white"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="group">
          <label className="block text-sm font-medium text-gray-700 mb-2">Category ID</label>
          <input
            type="text"
            name="category_id"
            placeholder="Category"
            value={formData.category_id}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none bg-gray-50/50"
            required
          />
        </div>

        <div className="group">
          <label className="block text-sm font-medium text-gray-700 mb-2">Location ID</label>
          <input
            type="text"
            name="location_id"
            placeholder="Location"
            value={formData.location_id}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none bg-gray-50/50"
            required
          />
        </div>
      </div>

      <div className="group">
        <label className="block text-sm font-medium text-gray-700 mb-2">Item Title</label>
        <input
          type="text"
          name="title"
          placeholder="e.g., MacBook Pro, Wallet, Keys"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none bg-gray-50/50"
          required
        />
      </div>

      <div className="group">
        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
        <textarea
          name="description"
          placeholder="Describe the item in detail (color, brand, distinctive features...)"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none bg-gray-50/50 resize-none"
          required
        />
      </div>

      <div className="group">
        <label className="block text-sm font-medium text-gray-700 mb-2">Upload Image</label>
        <div className="relative">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none bg-gray-50/50 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">Supported formats: JPG, PNG, GIF (Max 5MB)</p>
      </div>
    </div>

    <div className="flex gap-4 mt-8">
      <button
        type="button"
        onClick={handleCancel}
        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-95"
      >
        Cancel
      </button>

      <button
        type="submit"
        className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-500/25"
      >
        Submit Report
      </button>
    </div>

    <div className="mt-6 pt-4 border-t border-gray-100 text-center">
      <p className="text-xs text-gray-400">
        We'll notify you if your item is found
      </p>
    </div>
  </form>
</div>
  );
};

export default ReportFoundItemPage;