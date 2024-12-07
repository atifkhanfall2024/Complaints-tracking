import React from 'react';

const Headers = () => {
  return (
    <header className="bg-gray-500 text-white p-4 mx-[4%] rounded-lg shadow-md w-[calc(100%-3rem)] overflow-hidden">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold mx-[18%]">User Dashboard</h2>
        <div className="flex items-center space-x-4">
          {/* Icons */}
          <div className="flex space-x-3">
            <div className="bg-blue-700 p-2 rounded-full cursor-pointer">
            <i class="ri-group-fill"></i>
           
            </div>
            <div className="bg-blue-700 p-2 rounded-full cursor-pointer">
            <i class="ri-message-2-line"></i>
            </div>
            <div className="bg-blue-700 p-2 rounded-full cursor-pointer">
            <i  className='text-white' class="ri-notification-3-fill"></i>
            </div>
          </div>
          <button className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-600">
            New Complaint
          </button>
        </div>
      </div>
    </header>
  );
};

export default Headers;
