import React from 'react';
import {FormLoginField} from '../../shared';
import './registerForm.css';

import SelectRole from './SelectRole';


const RegisterForm = ({onSubmit}) => {

    const [register, setRegister] = React.useState({
        role: 'helper',
        email:'',
        name: '',
        username:'',
        firstFamilyName: '',
        secondFamilyName: '',
        password:'',
        phone:'',
        documentId:'DNI',
        idNumber:'',
        nationality:'',
        gender:'Hombre',
        bornDate:'',
        photo:null,
        address:'',
        curriculum:null,
        allergies:'',
        medicalKnowledge: true,
        about:'',
        tutor:''
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
    const [curriculum, setCurriculum] = React.useState();
    const [id, setId] = React.useState(); 
    const [gender, setGender] = React.useState()
    const [medical, setMedical] = React.useState()

    const handleChangeFile = event => {
        const file = event.target.files[0].name
        setFile(file)
        
    }
    const handleChangeCv = event => {
        const cv = event.target.files[0].name
        setCurriculum(cv) 
    }
    const handleSelectId = event => {
        const id = event.target.value;
        setId(id);
    }
    const handleGender = event => {
        const gender = event.target.value;
        setGender(gender)
    }
    const handleMedical = event => {
        const medical = event.target.value
        setMedical(medical)
    }
   
    const handleSubmit = event => {
        event.preventDefault();
        const photo = file;
        const cv = curriculum;
        const documentId = id;
        const selectGender = gender;
        const selectMedical = medical
        const RegisterData = {
        role: register.role,
        email: register.email,
        name: register.name,
        firstFamilyName: register.firstFamilyName,
        secondFamilyName: register.secondFamilyName,
        username: register.username,
        password: register.password,
        phone: register.phone,
        documentId: register.documentId,
        idNumber: register.idNumber,
        nationality: register.nationality,
        gender: register.gender,
        bornDate: register.bornDate,
        address: register.address,
        curriculum: register.curriculum,
        allergies: register.allergies,
        about:register.about
        }
        if (photo) {
            RegisterData['photo'] = photo;
        }
        if (cv){
            RegisterData['curriculum'] = curriculum;
        }
        if (documentId) {
            RegisterData['documentId'] = id;
        }
        if (selectGender) {
            RegisterData['gender'] = gender;
        }
        if (selectMedical) {
            RegisterData['medicalKnowledge']= medical;
        }
        onSubmit(RegisterData)
    }

     const {
    role,
    name,
    firstFamilyName,
    secondFamilyName,
    nationality,
    idNumber,
    bornDate,
    address,
    phone,
    allergies,
    username,
    email,
    password,
    about, 
    tutor
         } = register; 
    
return (
    <div>
        <form className="loginForm" onSubmit={handleSubmit}>
            <div className='rol-bloq'>
                <SelectRole
                    className='select-role'
                    name='role'
                    value={role}
                    handleChange={handleChangeRegister}  />
            </div>

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
            name="firstFamilyName"
            label="Apellido"
            className="registerForm-name"
            value={firstFamilyName}
            onChange={handleChangeRegister}
            />
            <FormLoginField
            type='text'
            name="secondFamilyName"
            label="Segundo apellido"
            className="registerForm-name"
            value={secondFamilyName}
            onChange={handleChangeRegister}
            />
            <FormLoginField
            type='number'
            name="phone"
            label="Teléfono"
            className="registerForm-name"
            value={phone}
            onChange={handleChangeRegister}
            />
            <FormLoginField
            type='text'
            name="username"
            label="Nombre de usuario"
            className="registerForm-name"
            value={username}
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
            <select name='documentId' className='identify-form' onChange={event => handleSelectId(event)}>
                    <option defaultChecked='DNI' selected='selected'>DNI</option>
                    <option value='NIF'>NIF</option>
                    <option value='NIE'>NIE</option>
                </select>
                <FormLoginField
                    type='text'
                    name="idNumber"
                    label="Identificador legal"
                    className="registerForm-identify"
                    value={idNumber}
                    onChange={handleChangeRegister}
                />
                 <FormLoginField
                    className="registerForm-nacionality"
                    type="text"
                    name="nationality"
                    label="Nacionalidad"
                    value={nationality}
                    onChange= {handleChangeRegister}
                />
                <select name='sex' className='gender-form'  onChange={event => handleGender(event)}>
                    <option value='hombre' >Hombre</option>
                    <option value='Mujer'>Mujer</option>
                    <option value='Otro'>Otro</option>
                </select>
               
            </div>                
            <div className='bloq2'>        
                <FormLoginField
                    className="registerForm-date"
                    type="date"
                    name="bornDate"
                    label="Fecha de nacimiento"
                    value={bornDate}
                    onChange= {handleChangeRegister}
                />
                <FormLoginField
                    className="registerForm-date"
                    type="file"
                    name="photo"
                    label="Foto de perfil"
                    value={register.photo}
                    onChange= {handleChangeFile}
                />
                <FormLoginField
                    className="registerForm-country"
                    type="text"
                    name="address"
                    label="Dirección"
                    value={address}
                    onChange= {handleChangeRegister}
                />
                {register.role === 'guest' ? 
                <FormLoginField
                    className="registerForm-name"
                    type='text'
                    name="name"
                    label="Nombre del tutor"
                    value={tutor}
                    onChange={handleChangeRegister}
                /> : null}
            </div>
            <h2 className='register-tittle'>Otro datos personales:</h2>
            <div className='bloq4'>
                <FormLoginField
                    className="registerForm-CV"
                    type="file"
                    name="cv"
                    label="Curriculum Vitae"
                    value={register.curriculum}
                    onChange= {handleChangeCv}
                />
                <label>¿Tienes conocimientos médicos?</label>
                <select name='medical' className='gender-form'  onChange={handleMedical}>
                    <option value={true} >Sí</option>
                    <option value={false}>No</option>
                </select>
                <label className='title-info'>Alergias:</label>
                <input 
                    className="registerForm-alergias"
                    type="text"
                    name="allergies"
                    value={allergies}
                    onChange= {handleChangeRegister}
                />
                <FormLoginField
                    type='text'
                    name="about"
                    label="Sobre ti:"
                    className="registerForm-name"
                    value={about}
                    onChange={handleChangeRegister}
            />
               
            </div>
            <div className='accept-button'>
                <button type='submit'  className='register-button'>Registrar</button>

            </div>
        </form>
        </div>
        
     
)

}

export default RegisterForm;