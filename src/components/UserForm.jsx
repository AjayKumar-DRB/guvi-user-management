import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/UserContext';

const UserForm = ({ onCancel, onComplete }) => {
  const { addUser, updateUser, editingUser } = useContext(UserContext);

  // Initialize the form state with default values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    address: { street: '', city: '' },
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingUser && Object.keys(editingUser).length !== 0) {
      setFormData({
        ...formData,
        ...editingUser,
        company: editingUser.company?.name || '',
        address: {
          street: editingUser.address?.street || '',
          city: editingUser.address?.city || '',
        },
      });
    }
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'street' || name === 'city') {
      // Update address fields specifically
      setFormData((prevState) => ({
        ...prevState,
        address: {
          ...prevState.address,
          [name]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const validate = () => {
    const validationErrors = {};
    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.company) validationErrors.company = 'Company is required';
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return; // Stop submission if validation fails

    const user = {
      id: editingUser?.id || Math.floor(Math.random() * 1000),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: { name: formData.company },
      website: formData.website,
      address: {
        street: formData.address.street,
        city: formData.address.city,
      },
    };

    if (editingUser && editingUser.id) {
      updateUser(user);
    } else {
      addUser(user);
    }

    // Reset form data
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      website: '',
      address: { street: '', city: '' },
    });

    onComplete(); // Close the form
  };

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-md w-96">
        <h3 className="text-xl font-bold mb-4">
          {editingUser && editingUser.id ? 'Edit User' : 'Add User'}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              disabled={editingUser && editingUser.id}
              className={`w-full p-2 border rounded ${editingUser && editingUser.id ? 'text-gray-500' : ''}`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Company */}
          <div>
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
          </div>

          {/* Website */}
          <div>
            <input
              type="text"
              name="website"
              placeholder="Website"
              value={formData.website}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Address */}
          <div className="flex gap-2">
            <input
              type="text"
              name="street"
              placeholder="Street"
              value={formData.address.street}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.address.city}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
