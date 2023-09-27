import { useForm } from 'react-hook-form'
import './Register.css'
import React from 'react';
import { NavBar } from '../Navbar';
export function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    const Entrada = ({ titulo, text }) => {
        return (
            <React.Fragment>
                <label>{titulo}</label>
                <input placeholder={text} className='entrada' />
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            {NavBar()}
            <div className='contenido'>
                <div className="contenedor">
                    <div className='titulo'><h2>Crear cuenta de empleado</h2></div>
                    <div className='formulario'>
                        <form className='formulario-formulario' onSubmit={handleSubmit(onSubmit)}>
                            <span>
                                <div className='nombre'>
                                    {Entrada({ titulo: 'Nombre', text: 'Nombre' })}
                                </div>
                                <div className='apellido'>
                                    {Entrada({ titulo: 'Apellido', text: 'Apellido' })}
                                </div>
                            </span>
                            {Entrada({ titulo: 'Email', text: 'Ingese su Email' })}
                            {Entrada({ titulo: 'Contraseña provisoria', text: 'Ingrese su contraseña' })}
                            {Entrada({ titulo: 'Repita la contraseña', text: 'Repita su contraseña' })}
                            {Entrada({ titulo: 'Direccion', text: 'Ingrese su direccion' })}
                            <p>Seleccione rol empleado</p>
                            <select className='entrada' type='text'{...register('rolEmpleado')} >
                                <option>Cocinero</option>
                                <option>Repartidor</option>
                                <option>Gerente</option>
                            </select>
                            {Entrada({ titulo: 'Telefono', text: 'Ingrese su numero' })}
                            {Entrada({ titulo: 'Departamento', text: 'Departamento' })}
                            <span className='formularioBoton'> <input type='submit' value="Continuar" className='boton'></input>  </span>

                        </form>
                    </div>

                </div >
            </div>
        </React.Fragment>


    )
}
