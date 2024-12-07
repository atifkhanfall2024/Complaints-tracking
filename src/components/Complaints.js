import React, { useState } from 'react';

const Complaint = () => {
  const [complaints, setComplaints] = useState([
    {
      id: '#123-456ABC',
      name: 'John Doe',
      date: '30/11/24',
      status: 'PENDING',
      details: 'View',
      description: 'This is a description of the complaint for John Doe.',
    },
    {
      id: '#123-456DEF',
      name: 'Jane Smith',
      date: '30/11/24',
      status: 'RESOLVED',
      details: 'View',
      description: 'This is a description of the complaint for Jane Smith.',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const [newComplaint, setNewComplaint] = useState({ name: '', status: 'PENDING' });

  // Handle adding a new complaint
  const handleAddComplaint = () => {
    if (newComplaint.name.trim()) {
      const id = `#123-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
      const date = new Date().toISOString().slice(0, 10);
      setComplaints([
        ...complaints,
        {
          id,
          name: newComplaint.name,
          date,
          status: newComplaint.status,
          details: 'View',
          description: `This is a description of the complaint for ${newComplaint.name}.`,
        },
      ]);
      setNewComplaint({ name: '', status: 'PENDING' });
      setIsModalOpen(false);
    }
  };

  // Filter complaints by search query
  const filteredComplaints = complaints.filter((complaint) =>
    complaint.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle viewing complaint details
  const handleViewDetails = (complaint) => {
    setSelectedComplaint(complaint);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-start bg-gray-100 h-screen p-5">
      {/* Placeholder for Sidebar and Header */}
      <div className="hidden">[Sidebar and Header Space]</div>

      <div
        style={{ transform: 'translate(14%, 0%)' }}
        className="w-full max-w-4xl bg-gray-200 rounded-md shadow-md p-5"
      >
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 mb-4">Complaints</h2>

        {/* Search Bar and Add Button */}
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search by ID"
            className="border rounded-md px-4 py-2 w-full max-w-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            onClick={() => setIsModalOpen(true)}
            className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add New
          </button>
        </div>

        {/* Complaints Table */}
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Serial No.</th>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredComplaints.length > 0 ? (
              filteredComplaints.map((complaint, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{complaint.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{complaint.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{complaint.date}</td>
                  <td
                    className={`border border-gray-300 px-4 py-2 ${
                      complaint.status === 'PENDING'
                        ? 'text-red-500'
                        : 'text-green-500'
                    }`}
                  >
                    {complaint.status}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => handleViewDetails(complaint)}
                      className="text-blue-500 hover:underline"
                    >
                      {complaint.details}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="border border-gray-300 px-4 py-2 text-center text-gray-500"
                >
                  No complaints found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for Viewing Complaint Details */}
      {isModalOpen && selectedComplaint && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-md shadow-md p-6 w-96">
            <h3 className="text-lg font-bold mb-4">Complaint Details</h3>
            <p className="mb-4">
              <strong>Description:</strong> {selectedComplaint.description}
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Complaint;
