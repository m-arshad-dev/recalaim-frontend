import { useState } from "react";
import { addItem } from "../../services/lostfoundservice";

const useReportItemForm = (type = "lost") => {
  const [formData, setFormData] = useState({
    user_id: "",
    category_id: "",
    location_id: "",
    title: "",
    description: "",
    status: type,
  });

  const [imageFile, setImageFile] = useState(null);

  // ✅ Fix typing issue
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Store real file
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  // ✅ Submit with FormData
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    for (let key in formData) {
      if (!formData[key]) {
        alert("All fields are required!");
        return;
      }
    }

    if (!imageFile) {
      alert("Image is required!");
      return;
    }

    try {
      const data = new FormData();

      // Append text fields
      for (let key in formData) {
        data.append(key, formData[key]);
      }

      // Append image file
      data.append("image", imageFile);

      console.log("Sending FormData...");

      const res = await addItem(data, type);

      console.log("Success:", res.data);
      alert("Item submitted successfully!");

      // Reset
      setFormData({
        user_id: "",
        category_id: "",
        location_id: "",
        title: "",
        description: "",
        status: type,
      });

      setImageFile(null);

    } catch (err) {
      console.log("Error:", err.response?.data || err.message);
      alert("Error submitting form");
    }
  };

  const handleCancel = () => {
    setFormData({
      user_id: "",
      category_id: "",
      location_id: "",
      title: "",
      description: "",
      status: type,
    });
    setImageFile(null);
  };

  return {
    formData,
    handleChange,
    handleImageChange,
    handleSubmit,
    handleCancel,
  };
};

export default useReportItemForm;