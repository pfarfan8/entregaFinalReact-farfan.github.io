import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBSP5EWjgaqnQMvtHcpAI_LGy8gHl_H78A",
  authDomain: "ecomerce-pablo.firebaseapp.com",
  projectId: "ecomerce-pablo",
  storageBucket: "ecomerce-pablo.appspot.com",
  messagingSenderId: "59153443810",
  appId: "1:59153443810:web:4e98389ec2eebdd55fa7bb"
};


initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
