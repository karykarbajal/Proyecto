import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login.jsx';
import RegistroUT from './RegistroUT.jsx';
import RegistroUC from './RegistroUC.jsx';
import InicioA from './InicioA.jsx';

import axios from 'axios';

function App() {

  const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/data')
            .then(response => {
               console.log(response.data);
            })
            .catch(error => {
               console.error('There was an error fetching the data!', error);
            });
    }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro_tatuador" element={<RegistroUT />} />
        <Route path="/registro_viwer" element={<RegistroUC />} />
        <Route path="/inicio_admin" element={<InicioA />} />

      </Routes>
    </Router>
  );
}

export default App;
