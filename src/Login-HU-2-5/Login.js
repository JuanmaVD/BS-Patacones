import React from 'react';
import './Login.css';

export function Login() {
    return(
        <div className='contenedor-login'>
            <div className='contenedor-login-login'>
                <img src={ require('./Captura de pantalla 2023-09-19 153737.png') } alt='logoLogin' className='logoLogin'></img>
                <p className='iniciarsesion'>Iniciar Sesión</p>
                <input type="text" className="inputLogin"></input><p></p>
                <input type="text" className="inputLogin"></input><p></p>
                <button className='botonConfirmar'>Confirmar</button><p></p>
                <a href='https://www.minecraft.net/es-es/login'>Crear</a>
                <p>-O-</p>
                <button>Ingresar con Google</button>
                <p>Todos los derechos reservados by Patacones S.A</p>
            </div>
        </div>
        );
}

