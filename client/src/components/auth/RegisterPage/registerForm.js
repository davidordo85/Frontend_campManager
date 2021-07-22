import React from 'react';
import { FormLoginField, FormCheckbox } from '../../shared';
import './registerForm.css';


const RegisterForm = () => {





return (
    <div>
        <form className="loginForm" onSubmit={null}>
            <h2 className='register-tittle'>Datos personales</h2>
        <div className='bloq1'>
            <FormLoginField
            className="registerForm-mail"
            type="text"
            name="email"
            label="Email"
            value={null}
            onChange= {null}
            />
            <FormLoginField
            className="registerForm-name"
            type='text'
            name="name"
            label="Nombre"
            value={null}
            onChange={null}
            />
            <FormLoginField
            type='text'
            name="surname"
            label="Apellidos"
            className="registerForm-name"
            value={null}
            onChange={null}
            />
            <FormLoginField
            type="password"
            name="password"
            label="Contraseña"
            className="registerForm-password"
            value={null}
            onChange={null}
            />
            <FormLoginField
            type="password"
            name="repeatPassword"
            label="Repite la contraseña"
            className="registerForm-password"
            value={null}
            onChange={null}
            />
            <FormLoginField
            type='number'
            name="telephone"
            label="Teléfono"
            className="registerForm-telephone"
            value={null}
            onChange={null}
            />
            </div>
            <div className='bloq2'>
                <select name='identify' className='identify-form'>
                    <option value='DNI'>DNI</option>
                    <option value='NIF'>NIF</option>
                    <option value='NIE'>NIE</option>
                </select>
                <FormLoginField
                    className="registerForm-identify"
                    type="text"
                    name="identifyNumber"
                    label="Identificador legal"
                    value={null}
                    onChange= {null}
                />
                <FormLoginField
                    className="registerForm-nacionality"
                    type="text"
                    name="nacionality"
                    label="Nacionalidad"
                    value={null}
                    onChange= {null}
                />
                <select name='gender' className='gender-form'>
                    <option value='men'>Hombre</option>
                    <option value='woman'>Mujer</option>
                    <option value='other'>Otro</option>
                </select>
                <FormLoginField
                    className="registerForm-date"
                    type="date"
                    name="date"
                    label="Fecha de nacimiento"
                    value={null}
                    onChange= {null}
                />
                <FormLoginField
                    className="registerForm-date"
                    type="file"
                    name="photo"
                    label="Foto de perfil"
                    value={null}
                    onChange= {null}
                />
            </div>
            <h2 className='register-tittle'>Dirección</h2>
            <div className='bloq3'>
                <FormLoginField
                    className="registerForm-country"
                    type="text"
                    name="country"
                    label="Pais de residencia"
                    value={null}
                    onChange= {null}
                />
                <FormLoginField
                    className="registerForm-locality"
                    type="text"
                    name="localidad"
                    label="Localidad"
                    value={null}
                    onChange= {null}
                />
                 <FormLoginField
                    className="registerForm-street"
                    type="text"
                    name="street"
                    label="Calle"
                    value={null}
                    onChange= {null}
                />
                <FormLoginField
                    className="registerForm-number"
                    type="number"
                    name="number"
                    label="Número"
                    value={null}
                    onChange= {null}
                />
                 <FormLoginField
                    className="registerForm-portal"
                    type="number"
                    name="portal"
                    label="Portal"
                    value={null}
                    onChange= {null}
                />
                <FormLoginField
                    className="registerForm-door"
                    type="text"
                    name="door"
                    label="Puerta"
                    value={null}
                    onChange= {null}
                />
            </div>
            <h2 className='register-tittle'>Otro datos personales:</h2>
            <div className='bloq4'>
                 <label className='title-info'>Alergias:</label>
                <input 
                    className="registerForm-alergias"
                    type="text"
                    name="alergias"
                    
                    value={null}
                    onChange= {null}
                />
                <label>Conocimientos médicos:</label>
                 <input 
                    className="registerForm-medical"
                    type="text"
                    name="medical"
                   
                    value={null}
                    onChange= {null}
                /> 
            </div>
            <div className='accept-button'>
                <button className='register-button'>Registrar</button>

            </div>
        </form>
        </div>
        
     
)

}

export default RegisterForm;