const UserDetails = ({ user, onBack }) => {
  if (!user) return null;

  return (
    <div className="flex justify-center items-center p-4 bg-gray-50">
      <div className="bg-white border border-gray-200 shadow rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">User Details</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-600">Name:</span>
            <span className="text-gray-800">{user?.name}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-600">Email:</span>
            <span className="text-gray-800">{user?.email}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-600">Phone:</span>
            <span className="text-gray-800">{user?.phone}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-600">Company:</span>
            <span className="text-gray-800">{user?.company?.name}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-600">Website:</span>
            <span className="text-blue-600 underline">{user?.website}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-600">Address:</span>
            <span className="text-gray-800">
              {`${user?.address?.street}, ${user?.address?.city}`}
            </span>
          </div>
        </div>

        <button
          onClick={onBack}
          className="mt-6 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
