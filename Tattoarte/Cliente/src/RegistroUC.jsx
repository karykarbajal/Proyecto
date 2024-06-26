import React, { useState } from 'react';
import './App.css'; // Importamos el archivo de estilos CSS.

function RegistroUC() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
    contrasena: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/viewers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Registro exitoso');
        setFormData({
          nombre: '',
          apellido: '',
          telefono: '',
          correo: '',
          contrasena: ''
        });
      } else {
        alert('Error en el registro');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error en el registro');
    }
  };

  return (
    <div className="Fondo1">
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">TATTOOARTE</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">INICIO</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">PERFIL</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>Registro Viewer</div>
      <div className="cuadro">
        <div className="container">
          <form id="perfilForm" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12 col-md-6">
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  placeholder="NOMBRE"
                  aria-label="NOMBRE"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                />
                <br />
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="apellido"
                  placeholder="APELLIDO"
                  aria-label="APELLIDO"
                  required
                  value={formData.apellido}
                  onChange={handleChange}
                />
                <br />
                <br />
                <input
                  type="number"
                  className="form-control"
                  name="telefono"
                  placeholder="TELEFONO"
                  aria-label="TELEFONO"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                />
                <br />
              </div>
              <div className="col">
                <br />
                <input
                  type="email"
                  className="form-control"
                  name="correo"
                  placeholder="CORREO"
                  aria-label="CORREO"
                  required
                  value={formData.correo}
                  onChange={handleChange}
                />
                <br />
                <br />
                <input
                  type="password"
                  className="form-control "
                  name="contrasena"
                  placeholder="CONTRASEÑA"
                  aria-label="CONTRASEÑA"
                  required
                  value={formData.contrasena}
                  onChange={handleChange}
                />
                <br />
                <br />
              </div>
            </div>
            <button type="submit" className="btn btn-secondary">Crear Perfil</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistroUC;