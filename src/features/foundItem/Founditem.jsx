import React, {useEffect, useState} from  "react";
import foundlostApi from "../../services/foundlostApi";
const Founditem = () =>{
  const [categories,setCategories]=useState([]);
  const [location,setLocation]=useState([]);
  const [preview, setPreview] = useState(null);
  const [formData ,setFormData] = useState({
    category_id:"",
    location_id:"0",
    title:"",
    description:"",
    image_url:null,
    status:"",
  });
  useEffect(()=>{
    const fetchData = async ()=>{
    try{
      const[cats,locs]=await Promise.all([
        getCategories(),
        getLocation(),
      ]);
      setCategories(cats);
      setLocation(locs);
    }catch(err){
      setError("Failed to load categories and locations");
    }
    };
    fetchData();
   
  },[]);
  const handleChange = (e) => {
    setFormData({
      ...formData,[e.target.name]:e.target.value,
    });
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const token =localStorage.getItem("token");
    const form = new FormData();
    form.append("title", formData.title);
    form.append("description", formData.description);
     form.append("status", formData.status);
    if (formData.category_id) form.append("category_id", formData.category_id);
    if(formData.location_id) form.append("location_id", formData.location_id);
    if(formData.image_url) form.append("image_url", formData.image_url); // file

    const data = await createItem(form,token); // your API should accept multipart/form-data
    alert("Item submitted successfully");
    setFormData({
       title: "",
        description: "",
        status: "",
        category_id: "",
        location_id: "",
        image: null,
    });
    setPreview(null);
  } catch (error) {
    alert(error.response?.data || "Something went wrong");
  }
};
const handleFileChange = (e) => {
  const file =e.target.file[0];
  if(file){
 setFormData({ ...formData, image_url: file });
  } setPreview(URL.createObjectURL(file));
 
};
return(
  <div className="min-h-screen flex justify-center bg-gray-100">
    <div className="w-[390px] h-[844px] bg-white shadow-xl rounded-2xl p-5 overflow-y-auto">
      <h1 className="text-2xl font-bold text-center mb-4">
        found item
      </h1>
      <form
      onSubmit={handleSubmit}
      className="space-y-3">
        
        <input type="text"
        name="title"
        placeholder="Item Name"
        value={formData.title}
        required
        onChange={handleChange}
        className="w-full p-2 border rounded-lg"/>
        
        <textarea 
        name="description"
        placeholder="description"
        rows={4}
        value={formData.description}
        required
        onChange={handleChange}
        className="w-full p-2 border rounded-lg"
         />
         <select
         name="category_id"
         value={formData.category_id}
         onChange={handleChange}
         className="w-full p-2 border rounded-lg"
          >
            <option value="">Select Category</option>
            {categories.map((cat)=>(
              <option key={cat.id} value ={cat.id}>{cat.name}</option>
            ))}
          </select>
           <select name="location_id"
           value={formData.location_id}
           onChange={handleChange}
           className="w-full p-2 border rounded-lg"
           >
            <option value="">Select locationt</option>
            {location.map((loc)=>(
              <option key={loc.id} value={loc.id}>{loc.city}</option>
            ))}
           </select>
           <div>
         <input type="file"
         accept="image/jpeg,image/png,image/webp"
         className="w-full p-2 border rounded-lg"
         onChange={handleFileChange}
          />
          {preview && (
            <img
            src={preview}
            alt="preview"
             className="mt-3 h-40 w-full object-cover rounded-lg border"
           />
          )}
          </div>
          <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Submit</button>
      </form>
    </div>
  </div>
);
};
export default Founditem;