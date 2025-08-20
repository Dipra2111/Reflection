import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios";
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
axios.defaults.baseURL = "http://localhost:5000"; // ✅ Set the base URL
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
