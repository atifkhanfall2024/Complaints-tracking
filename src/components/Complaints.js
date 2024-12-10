import React, { useState } from 'react';

const Complaint = () => {
  const [complaints, setComplaints] = useState([
    {
      id: '#123-456ABC',
      name: 'John Doe',
      date: '30/11/24',
      status: 'PENDING',
      description: 'This is a description of the complaint for John Doe.',
    },
  ]);

  const [newComplaint, setNewComplaint] = useState({ name: '', description: '' });
  const [searchQuery, setSearchQuery] = useState('');

  // Handle adding a new complaint
  const handleAddComplaint = () => {
    if (newComplaint.name.trim() && newComplaint.description.trim()) {
      const id = `#123-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
      const date = new Date().toISOString().split('T')[0]; // Today's date
      const newComplaintObj = {
        id,
        name: newComplaint.name,
        date,
        status: 'PENDING',
        description: newComplaint.description,
      };

      setComplaints([...complaints, newComplaintObj]); // Add complaint
      setNewComplaint({ name: '', description: '' }); // Reset form
    } else {
      alert('Please fill in all fields before submitting.');
    }
  };

  // Mark complaint as resolved
  const handleResolveComplaint = (id) => {
    setComplaints(
      complaints.map((complaint) =>
        complaint.id === id ? { ...complaint, status: 'RESOLVED' } : complaint
      )
    );
  };

  // Remove complaint from resolved complaints
  const handleRemoveResolvedComplaint = (id) => {
    setComplaints(complaints.filter((complaint) => complaint.id !== id));
  };

  // Filter complaints based on search query
  const filteredComplaints = complaints.filter((complaint) =>
    complaint.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Separate complaints by status
  const pendingComplaints = filteredComplaints.filter((c) => c.status === 'PENDING');
  const resolvedComplaints = filteredComplaints.filter((c) => c.status === 'RESOLVED');

  return (
    <div  className="flex flex-col items-center bg-gray-100 min-h-screen p-5">
      <h1 className="text-2xl font-bold mb-5">Complaint Management System</h1>

      {/* Search Bar and Add Complaint Form */}
      <div style={{transform:"translate(10%  , 0%)"}} className="w-full max-w-4xl mb-5">
        <input
          type="text"
          placeholder="Search by Complaint ID"
          className="border rounded-md px-4 py-2 w-full max-w-sm mb-4"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div  className="bg-white p-4 bg-gray-300 rounded-md shadow-md">
          <h2 className="font-bold text-gray-800 mb-4">Submit a New Complaint</h2>
          <div  className="mb-3">
            <input
              type="text"
              placeholder="Your Name"
              className="border rounded-md px-4 py-2 w-full"
              value={newComplaint.name}
              onChange={(e) => setNewComplaint({ ...newComplaint, name: e.target.value })}
            />
          </div>
          <div  className="mb-3">
            <textarea
              placeholder="Complaint Description"
              className="border rounded-md px-4 py-2 w-full"
              rows="3"
              value={newComplaint.description}
              onChange={(e) =>
                setNewComplaint({ ...newComplaint, description: e.target.value })
              }
            ></textarea>
          </div>
          <button
            onClick={handleAddComplaint}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit Complaint
          </button>
        </div>
      </div>

      {/* Complaints Table */}
      <div style={{transform:"translate(10%  , 0%)"}} className="w-full max-w-4xl bg-white p-4 rounded-md shadow-md">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Pending Complaints</h2>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Serial No.</th>
              <th className="border border-gray-300 px-4 py-2">Complaint ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingComplaints.length > 0 ? (
              pendingComplaints.map((complaint, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{complaint.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{complaint.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{complaint.date}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => handleResolveComplaint(complaint.id)}
                      className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600"
                    >
                      Resolve
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="border border-gray-300 px-4 py-2 text-center text-gray-500"
                >
                  No pending complaints.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Resolved Complaints */}
      <div style={{transform:"translate(10%  , 0%)"}} className="w-full max-w-4xl bg-white p-4 rounded-md shadow-md mt-5">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Resolved Complaints</h2>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Serial No.</th>
              <th className="border border-gray-300 px-4 py-2">Complaint ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {resolvedComplaints.length > 0 ? (
              resolvedComplaints.map((complaint, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{complaint.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{complaint.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{complaint.date}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => handleRemoveResolvedComplaint(complaint.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="border border-gray-300 px-4 py-2 text-center text-gray-500"
                >
                  No resolved complaints.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Complaint;
