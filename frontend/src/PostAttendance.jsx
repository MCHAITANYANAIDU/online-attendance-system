// PostAttendance.jsx
import React, { useState } from 'react';
import axios from 'axios';

const PostAttendance = () => {
  const [userId, setUserId] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const response = await axios.post(
        'http://localhost:5000/attendance',
        { user_id: userId, date, status },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessage(response.data.message);
    } catch (err) {
      setMessage('Failed to post attendance.');
    }
  };

  return (
    <div>
      <h2>Post Attendance</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="number" 
          placeholder="User ID" 
          value={userId} 
          onChange={(e) => setUserId(e.target.value)} 
        />
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="present">Present</option>
          <option value="absent">Absent</option>
        </select>
        <button type="submit">Post Attendance</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PostAttendance;
