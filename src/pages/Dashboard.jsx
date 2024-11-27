import React, { useState, useContext, useEffect } from 'react';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import UserDetails from '../components/UserDetails';
import { UserContext } from '../context/UserContext';

const Dashboard = () => {
  const [view, setView] = useState('list'); // 'list', 'form', or 'details'
  const [selectedUser, setSelectedUser] = useState(null);
  const { setEditingUser, fetchUsers, users } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1); // Lifted pagination state
  const usersPerPage = 6; // Configurable number of users per page

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = () => {
    setEditingUser({});
    setView('form');
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setView('form');
  };

  const handleCancel = () => {
    setEditingUser(null);
    setView('list');
  };

  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setView('details');
  };

  return (
    <div className="bg-white shadow rounded-md p-6">
      {view === 'list' && (
        <div>
          <div className="flex justify-end items-center mb-4">
            <button
              onClick={handleAddUser}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Add User
            </button>
          </div>
          <UserList
            onEditUser={handleEditUser}
            onViewDetails={handleViewDetails}
            users={users}
            usersPerPage={usersPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage} // Pass pagination state
          />
        </div>
      )}

      {view === 'form' && (
        <UserForm onCancel={handleCancel} onComplete={() => setView('list')} />
      )}

      {view === 'details' && (
        <UserDetails user={selectedUser} onBack={() => setView('list')} />
      )}
    </div>
  );
};

export default Dashboard;
