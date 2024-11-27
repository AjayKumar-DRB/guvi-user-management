import React from 'react';
import { UserProvider } from './context/UserContext';
import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <UserProvider>
    <div className="min-h-screen bg-gray-50 py-4 px-8">
      <header className="bg-white shadow rounded-md p-4 mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">User Management Dashboard</h1>
      </header>
      <Dashboard />
      <ToastContainer />
    </div>
  </UserProvider>
);

export default App;
