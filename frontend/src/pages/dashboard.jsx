import React, { useEffect, useState } from 'react';
import axios from '../services/api';

const Dashboard = () => {
    const [attendance, setAttendance] = useState([]);

    useEffect(() => {
        const fetchAttendance = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('/attendance/summary', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setAttendance(response.data);
            } catch (error) {
                alert('Failed to fetch attendance: ' + error.response.data);
            }
        };
        fetchAttendance();
    }, []);

    return (
        <div className="dashboard">
            <h2>Attendance Summary</h2>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Total Days</th>
                        <th>Present Days</th>
                        <th>Absent Days</th>
                    </tr>
                </thead>
                <tbody>
                    {attendance.map((record) => (
                        <tr key={record.user_id}>
                            <td>{record.user_id}</td>
                            <td>{record.total_days}</td>
                            <td>{record.present_days}</td>
                            <td>{record.absent_days}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
