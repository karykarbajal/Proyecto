import React, { useState } from 'react'; // Importamos React y useState para manejar el estado.
import './App.css'; // Importamos el archivo de estilos CSS.


function RegistroUT() {

  // Definimos un estado llamado 'inputs' que es un array. Inicialmente, está vacío.
  const [inputs, setInputs] = useState([]);

  // Esta función se llama cuando se hace clic en uno de los switches. 
  // Agrega o elimina un nuevo tipo de input al array 'inputs' según el estado del switch.
  const handleToggleInput = (type) => {
    // Verificamos si el tipo de input ya existe en el array 'inputs'.
    const inputIndex = inputs.indexOf(type);
    if (inputIndex !== -1) {
      // Si el tipo de input existe, lo eliminamos del array 'inputs'.
      setInputs(inputs.filter(input => input !== type));
    } else {
      // Si el tipo de input no existe, lo agregamos al array 'inputs'.
      setInputs([...inputs, type]);
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
                  <a className="nav-link" href="#">TEXTO 1</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">TEXTO 2</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      <div>Registro Tatuador</div>
        <div className="cuadro">
          <h2>DATOS PERSONALES</h2>
          <div className="row">
            <div className="col">
              <input type="text" className="form-control" placeholder="NOMBRE" aria-label="First name" />
              <br />
              <input type="text" className="form-control" placeholder="APELLIDO" aria-label="NOMBRE" />
              <br />
              <input type="text" className="form-control" placeholder="TELEFONO" aria-label="First name" />
              <br />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="CORREO" aria-label="First name" />
              <br />
              <input type="text" className="form-control" placeholder="CONTRASEÑA" aria-label="First name" />
              <br />
            </div>
          </div>
          <div className="row">
            <h2>DIRECCION</h2>
            <div className="col">
              <input type="text" className="form-control" placeholder="CALLE" aria-label="First name" />
              <br />
              <input type="text" className="form-control" placeholder="NUMERO EXTERIOR" aria-label="NOMBRE" />
              <br />
              <input type="text" className="form-control" placeholder="COLONIA" aria-label="First name" />
              <br />
              <input type="text" className="form-control" placeholder="CODIGO POSTAL" aria-label="First name" />
              <br />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="MUNICIPIO" aria-label="First name" />
              <br />
              <input type="text" className="form-control" placeholder="ESTADO" aria-label="First name" />
              <br />
              <input type="text" className="form-control" placeholder="LOCALIDAD" aria-label="First name" />
              <br />
            </div>
          </div>
          <div className="row">
            <h2>ESPECIALIDAD Y REDES SOCIALES</h2>
            <div className="col">
              {/* Cada switch tiene un evento onClick que llama a handleToggleInput con el tipo de red social. */}
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="facebookSwitch" onClick={() => handleToggleInput('FACEBOOK')} />
                <label className="form-check-label" htmlFor="facebookSwitch">FACEBOOK</label>
              </div>
              <br />
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="whatsappSwitch" onClick={() => handleToggleInput('WHATSAPP')} />
                <label className="form-check-label" htmlFor="whatsappSwitch">WHATSAPP</label>
              </div>
              <br />
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="instagramSwitch" onClick={() => handleToggleInput('INSTAGRAM')} />
                <label className="form-check-label" htmlFor="instagramSwitch">INSTAGRAM</label>
              </div>
              <br />
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="tiktokSwitch" onClick={() => handleToggleInput('TIKTOK')} />
                <label className="form-check-label" htmlFor="tiktokSwitch">TIKTOK</label>
              </div>
            </div>
            <div className="col">
              {/* Renderizamos los inputs adicionales basándonos en el array 'inputs'. */}
              {inputs.map((input, index) => (
                <input key={index} type="text" className="form-control mt-2" placeholder={`Link de ${input}`} aria-label={input} />
              ))}
            </div>
          </div>
          <div className="row">
            <h2>ESPECIALIDADES</h2>
            <div className="col">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" /> REALISTA
              <br/>
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" /> NEOTRADICIONAL
              <br/>
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" /> DOTWORK
              <br/>
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" /> ACUARELA
              <br/>
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" /> GEOMETRICO
              <br/>
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" /> 3D
              <br/>
            </div>
            <div className="col">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" /> OLD SCHOOL O TRADICIONAL
              <br/>
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" /> BLACKWORK
              <br/>
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" /> JAPONÉS
              <br/>
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" /> TEJIDO
              <br/>
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" /> TRIBAL
              <br/>
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" /> ANIME/GEEK/KAWAII
              <br/>
            </div>
          </div>
          <button type="button" className="btn btn-secondary" >Crear Perfil</button>
        </div>
          <br/>
      </div>
  );
}


export default RegistroUT