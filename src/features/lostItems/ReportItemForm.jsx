import { useState } from "react";
import { addItem } from "../../services/lostfoundservice";

const useReportItemForm = (type = "lost") => {
  const [formData, setFormData] = useState({
    user_id: "",
    category_id: "",
    location_id: "",
    title: "",
    description: "",
    image_url: "",
    status: type,
  });

  const [imageFile, setImageFile] = useState(null);

  // Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    if (file) {
      setFormData((prev) => ({
        ...prev,
        image_url: file.name,
      }));
    }
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    for (let key in formData) {
      if (!formData[key]) {
        alert("All fields are required!");
        return;
      }
    }

    try {
      const res = await addItem(formData, type);
      console.log("Success:", res.data);
      alert("Item submitted successfully!");

      // Reset
      setFormData({
        user_id: "",
        category_id: "",
        location_id: "",
        title: "",
        description: "",
        image_url: "",
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
      image_url: "",
      status: type,
    });
    setImageFile(null);
  };

  // 🔥 Return everything to page
  return {
    formData,
    imageFile,
    handleChange,
    handleImageChange,
    handleSubmit,
    handleCancel,
  };
};

export default useReportItemForm;