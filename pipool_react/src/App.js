import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import cors from 'cors';
import express from 'express';

function App() {
    const express = require('express');
    const cors = require('cors');
    const app = express();

    app.use(cors());

    app.get('http://127.0.0.1:8000/', (req, res) => {
      res.json({ message: 'Hello from server!' });
    });

    app.listen(3000, () => {
      console.log('Server is running on port 5000');
    });


//  const [data, setData] = useState([]);
//  const [loading, setLoading] = useState(true);
//  const [error, setError] = useState(null);
//
//  useEffect(() => {
//    fetchData();
//  }, []);
//  const fetchData = async () => {
//  try {
//    let headers = new Headers();
//
//    headers.append('Content-Type', 'application/json');
//    headers.append('Accept', 'application/json');
//    headers.append('Access-Control-Allow-Methods: GET, POST, OPTIONS');
////    headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
//    headers.append('Origin','http://127.0.0.1:8000/');
//    console.log("----after headers-")
//    const response = await fetch('http://127.0.0.1:8000/', {
//        mode: 'cors',
//        method: 'GET',
//        headers: headers
//    }); // Replace with your API endpoint
//    const response = await fetch('http://127.0.0.1:8000/');
//    if (!response.ok) {
//      throw new Error('Network response was not ok.');
//    }
//    const data = await response.json();
//    console.log("--------data--------")
////    console.log("response--------",response)
//    setData(data);
//    setLoading(false);
//    console.log("----------data-----------------")
//    console.log(this.state.data)
//  } catch (error) {
//    setError(error.message);
//    setLoading(false);
//  }
//};


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
