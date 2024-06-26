import React from 'react';
import { Table } from 'react-bootstrap'; // Importa Table de react-bootstrap
import { useNavigate } from 'react-router-dom'; // Importa useNavigate de React Router para la redirección

function InicioA() {
  return (
    <div>
      <div className="FondoA">
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
                  <a className="nav-link" href="#">TATUADORES</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">PLANES</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="cuadro ">
          <div className="text-center mt-5">
            <h2>BIENVENIDO ADMINISTRADOR</h2>
          </div>
          <div className="mt-5">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Teléfono</th>
                  <th>Correo</th>
                  <th>Plan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Juan</td>
                  <td>Pérez</td>
                  <td>123456789</td>
                  <td>juan.perez@example.com</td>
                  <td>Estándar</td>
                </tr>
                <tr>
                  <td>María</td>
                  <td>González</td>
                  <td>987654321</td>
                  <td>maria.gonzalez@example.com</td>
                  <td>Premium</td>
                </tr>
                <tr>
                  <td>Carlos</td>
                  <td>Martínez</td>
                  <td>456123789</td>
                  <td>carlos.martinez@example.com</td>
                  <td>Estándar</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InicioA;
