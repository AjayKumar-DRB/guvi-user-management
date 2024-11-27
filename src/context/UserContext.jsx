import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

// Create Context
export const UserContext = createContext();

// Provider Component
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  // Fetch Users (GET)
  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      setUsers(data);
      toast.success('Users fetched successfully!');
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  // Add User (POST)
  const addUser = async (newUser) => {
    try {
      const emailExists = users.some((user) => user.email === newUser.email);

      if (emailExists) {
        toast.error('Email already exists. Please use a unique email.');
        return false; // Stop the add operation
      }

      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });
      if (!response.ok) throw new Error('Failed to add user');
      const data = await response.json();
      setUsers((prevUsers) => [...prevUsers, data]);
      toast.success('User added successfully!');
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  // Update User (PUT)
  const updateUser = async (updatedUser) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${updatedUser.id}`,
        {
          method: 'PUT',
          body: JSON.stringify(updatedUser),
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        }
      );
      if (!response.ok) throw new Error('Failed to update user');
      const data = await response.json();
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === updatedUser.id ? data : user))
      );
      setEditingUser(null);
      toast.success('User updated successfully!');
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  // Delete User (DELETE)
  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        { method: 'DELETE' }
      );
      if (!response.ok) throw new Error('Failed to delete user');
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      toast.success('User deleted successfully!');
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <UserContext.Provider
      value={{
        users,
        editingUser,
        setEditingUser,
        fetchUsers,
        addUser,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
