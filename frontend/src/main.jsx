// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './styles/global.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Styling for the app
import Register from './Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>
);
