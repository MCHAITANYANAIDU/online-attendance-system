// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Login from './pages/login';
// import Dashboard from './pages/dashboard';

// const App = () => {
//     return (
//         <Router>
//             <Header />
//             <Routes>
//                 <Route path="/" element={<Login />} />
//                 <Route path="/dashboard" element={<Dashboard />} />
//             </Routes>
//         </Router>
//     );
// };

// export default App;
// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// const App = () => {
//   const [students, setStudents] = useState([]);
//   const [name, setName] = useState('');
//   const [date, setDate] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [token, setToken] = useState(localStorage.getItem('token'));

//   // Handle user registration
//   const handleRegister = () => {
//     const data = { username, password };
//     axios.post('http://localhost:5000/register', data)
//       .then(response => alert(response.data.message))
//       .catch(error => console.error('Error registering user:', error));
//   };

//   // Handle user login
//   const handleLogin = () => {
//     const data = { username, password };
//     axios.post('http://localhost:5000/login', data)
//       .then(response => {
//         localStorage.setItem('token', response.data.token);
//         setToken(response.data.token);
//       })
//       .catch(error => console.error('Error logging in:', error));
//   };

//   // Handle adding attendance
//   const handleAddAttendance = () => {
//     if (!token) return alert('Please log in first');
//     const data = { name, date };
//     axios.post('http://localhost:5000/attendance', data, { headers: { Authorization: token } })
//       .then(response => {
//         setStudents([...students, response.data]);
//         setName('');
//         setDate('');
//       })
//       .catch(error => console.error('Error adding attendance:', error));
//   };

//   // Fetch attendance data
//   const fetchAttendance = () => {
//     if (!token) return alert('Please log in first');
//     axios.get('http://localhost:5000/attendance', { headers: { Authorization: token } })
//       .then(response => setStudents(response.data))
//       .catch(error => console.error('Error fetching attendance:', error));
//   };

//   return (
//     <div className="app">
//       <h1>Online Attendance System</h1>
//       {!token ? (
//         <div className="auth-container">
//           <div className="auth-section">
//             <h2>Register</h2>
//             <input 
//               type="text" 
//               placeholder="Username" 
//               value={username} 
//               onChange={(e) => setUsername(e.target.value)} 
//             />
//             <input 
//               type="password" 
//               placeholder="Password" 
//               value={password} 
//               onChange={(e) => setPassword(e.target.value)} 
//             />
//             <button onClick={handleRegister}>Register</button>
//           </div>

//           <div className="auth-section">
//             <h2>Login</h2>
//             <button onClick={handleLogin}>Login</button>
//           </div>
//         </div>
//       ) : (
//         <div className="attendance-container">
//           <h2>Mark Attendance</h2>
//           <input 
//             type="text" 
//             placeholder="Student Name" 
//             value={name} 
//             onChange={(e) => setName(e.target.value)} 
//           />
//           <input 
//             type="date" 
//             value={date} 
//             onChange={(e) => setDate(e.target.value)} 
//           />
//           <button onClick={handleAddAttendance}>Mark Attendance</button>

//           <h2>Attendance List</h2>
//           <button onClick={fetchAttendance}>Fetch Attendance</button>
//           <ul>
//             {students.map((student, index) => (
//               <li key={index}>
//                 {student.name} - {student.date}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Handle register button click
  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent page refresh on form submit

    // Validate inputs
    import React, { useState } from 'react';
    import axios from 'axios';
    
    const Register = () => {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [message, setMessage] = useState('');
    
      // Handle register button click
      const handleRegister = async (e) => {
        e.preventDefault(); // Prevent page refresh on form submit
    
        // Validate inputs
        if (!username || !password) {
          setMessage("Username and password are required.");
          return;
        }
    
        try {
          // Sending POST request to the backend API
          const response = await axios.post('http://localhost:5000/register', {
            username,
            password,
          });
    
          // Handle success response
          setMessage(response.data.message);
          setUsername('');
          setPassword('');
        } catch (error) {
          // Handle error response
          console.error('Registration failed:', error);
          setMessage('Registration failed. Please try again.');
        }
      };
    
      return (
        <div>
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      );
    };
    
    export default Register;
    