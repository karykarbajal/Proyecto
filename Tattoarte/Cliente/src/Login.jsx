import React, { useState } from 'react'; // Importa React y useState para el manejo del estado
import { Modal, Button } from 'react-bootstrap'; // Importa Modal y Button de react-bootstrap
import { useNavigate } from 'react-router-dom'; // Importa useNavigate de React Router para la redirección

function Login() {
  const [show, setShow] = useState(false); // Estado para controlar la visibilidad del modal
  const [email, setEmail] = useState(''); // Estado para el email
  const [password, setPassword] = useState(''); // Estado para la contraseña
  const [error, setError] = useState(''); // Estado para el mensaje de error
  const navigate = useNavigate(); // Hook para la navegación

  const handleClose = () => setShow(false); // Función para cerrar el modal
  const handleShow = () => setShow(true); // Función para mostrar el modal

  const redirectToUrl = (path) => {
    navigate(path); // Redirige a la ruta especificada
  };

  const handleLogin = () => {
    if (email === 'admin@gmail.com' && password === '12345678') {
      redirectToUrl('/inicio_admin');
    } else {
      setError('Correo o contraseña incorrecta');
    }
  };

  return (
    <div>
      <div className="Fondo2">
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
        <div className="cuadro ">
          <div className="text-center mt-5">
            <h2>BIENVENIDOS</h2>
            <div className="row">
              <div className="col">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="CORREO" 
                  aria-label="First name"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="CONTRASEÑA" 
                  aria-label="First name"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                {error && <p className="text-danger">{error}</p>}
              </div>
            </div>
            <button type="button" className="btn btn-secondary" onClick={handleLogin}>INICIAR SESION</button>
          </div>
          <div className="row text-center mt-5">
            <div className="col">
              <p className="text-decoration-underline text-info">OLVIDE CONTRASEÑA</p>
            </div>
            <div className="col">
            <button type="button" className="btn btn-secondary" onClick={handleShow}>CREAR CUENTA</button>
              <br />
            </div>
          </div>
        </div>
      </div>

      {/* Modal para seleccionar el tipo de perfil */}
      <Modal className='modal-lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¿Qué tipo de perfil deseas crear?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-around">
          <Button className="m-2" variant="outline-success" onClick={() => redirectToUrl('/registro_tatuador')}>
            <div>
              <h3>TATUADOR</h3>
              <p>
                Podrás mostrar tus especialidades, diseños, ubicación de estudio, redes sociales para tus futuros clientes.
              </p>
            </div>
          </Button>

          <Button className="m-2" variant="outline-success" onClick={() => redirectToUrl('/registro_viwer')}>
            <div>
              <h3>CLIENTE</h3>
              <p>
                Podrás visualizar los perfiles de los tatuadores (especialidades, diseños, ubicación de estudio, redes sociales), para hacerte tu tatuaje.
              </p>
            </div>
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Login;
