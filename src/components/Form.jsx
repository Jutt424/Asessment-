import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent, updateStudent } from '../store/store';
import { useNavigate, useLocation } from 'react-router-dom';

const Form = () => {

  // phone number regex
//   const phoneRegex = /^(?:\+92|0)3[0-9]{9}$/; 
// const phone = "+923001234567";

// if (phoneRegex.test(phone)) {
//   console.log("Valid Pakistani phone number");
// } else {
//   console.log("Invalid phone number");
// }

  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^(?:\+92|0)3[0-9]{9}$/; //copy from google
    return phoneRegex.test(phone);
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    return age;
  };

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    education: '',
  });

  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    if (location.state) {
      const { student, index } = location.state;
      setFormData(student);
      setEditIndex(index);
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidPhoneNumber(formData.phone)) {
      alert('Please enter a valid Pakistani phone number (e.g., +923001234567 or 03001234567).');
      return;
    }

    const age = calculateAge(formData.dob);
    if (age < 18) {
      alert('This student is not eligible to be added or updated (under 18).');
      return;
    }

    if (editIndex !== null) {
      dispatch(updateStudent({ index: editIndex, student: formData }));
      alert(`Student updated successfully!\nName: ${formData.name}`);
    } else {
      dispatch(addStudent(formData));
      alert('Student added successfully!');
    }

    navigate('/list');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        {editIndex !== null ? 'Edit Student' : 'Add Student'}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Phone Number:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={(e) => {
              const { value } = e.target;
              const filteredValue = value.replace(/[^0-9+]/g, "");
              setFormData({ ...formData, phone: filteredValue });
            }}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number (e.g., +923001234567)"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Education:</label>
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your education"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
