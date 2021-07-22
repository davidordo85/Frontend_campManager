import React from 'react';
import { FormLoginField, FormCheckbox } from '../../shared';
import './registerForm.css';


const RegisterForm = () => {

    const [register, setRegister] = React.useState({
        email:'',
        name: '',
        surname:'',
        password:'',
        telephone:'',
        identify:'',
        identifyNumber:'',
        nacioality:'',
        sex:'',
        date:'',
        photo:null,
        country:'',
        locality:'',
        street:'',
        number:'',
        portal:'',
        door:'',
        allergies:'',
        medical:''
    });

    const handleChangeRegister = event => {
        setRegister(oldRegister => {
            const newRegister = {
                ...oldRegister,
                [event.target.name] : event.target.value,
            };
            if (register.photo){
                oldRegister.append(file)
            }
            return newRegister
        })
    }

    const [file, setFile] = React.useState();

    const handleChangeFile = event => {
        const file = event.target.files[0]
        setFile(file)
    }

     const {
        email, 
        name,
        surname, 
        password, 
        telephone, 
        identify, 
        identifyNumber,
        nacioality,
        sex, 
        date, 
        country, 
        locality,
        street, 
        number, 
        portal, 
        door, 
        allergies, 
        medical 
         } = register; 
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
            value={email}
            onChange= {handleChangeRegister}
            />
            <FormLoginField
            className="registerForm-name"
            type='text'
            name="name"
            label="Nombre"
            value={name}
            onChange={handleChangeRegister}
            />
            <FormLoginField
            type='text'
            name="surname"
            label="Apellidos"
            className="registerForm-name"
            value={surname}
            onChange={handleChangeRegister}
            />
            <FormLoginField
            type="password"
            name="password"
            label="Contraseña"
            className="registerForm-password"
            value={password}
            onChange={handleChangeRegister}
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
            value={telephone}
            onChange={handleChangeRegister}
            />
            </div>
            <div className='bloq2'>
                <select name='identify' className='identify-form' value={identify} handleChange={handleChangeRegister}>
                    <option value='DNI'>DNI</option>
                    <option value='NIF'>NIF</option>
                    <option value='NIE'>NIE</option>
                </select>
                <FormLoginField
                    className="registerForm-identify"
                    type="text"
                    name="identifyNumber"
                    label="Identificador legal"
                    value={identifyNumber}
                    onChange= {handleChangeRegister}
                />
                <FormLoginField
                    className="registerForm-nacionality"
                    type="text"
                    name="nacionality"
                    label="Nacionalidad"
                    value={nacioality}
                    onChange= {handleChangeRegister}
                />
                <select name='sex' className='gender-form' value={sex} handleChange={handleChangeRegister}>
                    <option value='men'>Hombre</option>
                    <option value='woman'>Mujer</option>
                    <option value='other'>Otro</option>
                </select>
                <FormLoginField
                    className="registerForm-date"
                    type="date"
                    name="date"
                    label="Fecha de nacimiento"
                    value={date}
                    onChange= {null}
                />
                <FormLoginField
                    className="registerForm-date"
                    type="file"
                    name="photo"
                    label="Foto de perfil"
                    value={register.photo}
                    onChange= {handleChangeFile}
                />
            </div>
            <h2 className='register-tittle'>Dirección</h2>
            <div className='bloq3'>
                <FormLoginField
                    className="registerForm-country"
                    type="text"
                    name="country"
                    label="Pais de residencia"
                    value={country}
                    onChange= {handleChangeRegister}
                />
                <FormLoginField
                    className="registerForm-locality"
                    type="text"
                    name="localidad"
                    label="Localidad"
                    value={locality}
                    onChange= {handleChangeRegister}
                />
                 <FormLoginField
                    className="registerForm-street"
                    type="text"
                    name="street"
                    label="Calle"
                    value={street}
                    onChange= {handleChangeRegister}
                />
                <FormLoginField
                    className="registerForm-number"
                    type="number"
                    name="number"
                    label="Número"
                    value={number}
                    onChange= {handleChangeRegister}
                />
                 <FormLoginField
                    className="registerForm-portal"
                    type="number"
                    name="portal"
                    label="Portal"
                    value={portal}
                    onChange= {handleChangeRegister}
                />
                <FormLoginField
                    className="registerForm-door"
                    type="text"
                    name="door"
                    label="Puerta"
                    value={door}
                    onChange= {handleChangeRegister}
                />
            </div>
            <h2 className='register-tittle'>Otro datos personales:</h2>
            <div className='bloq4'>
                 <label className='title-info'>Alergias:</label>
                <input 
                    className="registerForm-alergias"
                    type="text"
                    name="alergias"
                    value={allergies}
                    onChange= {handleChangeRegister}
                />
                <label>Conocimientos médicos:</label>
                 <input 
                    className="registerForm-medical"
                    type="text"
                    name="medical"
                    value={medical}
                    onChange= {handleChangeRegister}
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