import React from 'react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'; // Importing Heroicons

const UserCard = ({ user, onEdit, onDelete, onViewDetails }) => (
  <div
    onClick={onViewDetails} // Trigger view details when clicking anywhere on the card
    className="bg-white shadow hover:shadow-md transition-shadow duration-300 rounded-md p-4 cursor-pointer hover:bg-gray-50"
  >
    <h3 className="text-lg font-bold text-gray-800">{user?.name}</h3>
    <p className="text-sm text-gray-600">{user?.email}</p>
    <p className="text-sm text-gray-500">{user?.company.name}</p>

    <div className="mt-4 flex gap-4">
      {/* Edit Icon */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering onViewDetails
          onEdit();
        }}
        className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600"
        aria-label="Edit User"
      >
        <PencilSquareIcon className="w-5 h-5" />
      </button>

      {/* Delete Icon */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering onViewDetails
          onDelete();
        }}
        className="p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-600"
        aria-label="Delete User"
      >
        <TrashIcon className="w-5 h-5" />
      </button>
    </div>
  </div>
);

export default UserCard;
