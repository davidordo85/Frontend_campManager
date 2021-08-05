import React from 'react';
import SelectRole from './SelectRole';
import { Form, Button } from 'react-bootstrap';
import './registerForm.css';

const RegisterForm = ({ onSubmit }) => {
  const [register, setRegister] = React.useState({
    role: 'helper',
    email: '',
    name: '',
    username: '',
    firstFamilyName: '',
    secondFamilyName: '',
    password: '',
    phone: '',
    documentId: 'DNI',
    idNumber: '',
    nationality: '',
    gender: 'Hombre',
    bornDate: '',
    photo: null,
    address: '',
    curriculum: null,
    allergies: '',
    medicalKnowledge: true,
    about: '',
    tutor: '',
  });

  const handleChangeRegister = event => {
    setRegister(oldRegister => {
      const newRegister = {
        ...oldRegister,
        [event.target.name]: event.target.value,
      };
      if (register.photo) {
        oldRegister.append(file);
      }
      return newRegister;
    });
  };
  const [repeatPassword, setRepeatPassword] = React.useState();

  const handleRepeatPassword = event => {
    const repeatPassword = event.target.value;
    setRepeatPassword(repeatPassword);
  };

  const [file, setFile] = React.useState();
  const [curriculum, setCurriculum] = React.useState();
  const [id, setId] = React.useState();
  const [gender, setGender] = React.useState();
  const [medical, setMedical] = React.useState();

  const handleChangeFile = event => {
    const file = event.target.files[0].name;
    setFile(file);
  };
  const handleChangeCv = event => {
    const cv = event.target.files[0].name;
    setCurriculum(cv);
  };
  const handleSelectId = event => {
    const id = event.target.value;
    setId(id);
  };
  const handleGender = event => {
    const gender = event.target.value;
    setGender(gender);
  };
  const handleMedical = event => {
    const medical = event.target.value;
    setMedical(medical);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const photo = file;
    const cv = curriculum;
    const documentId = id;
    const selectGender = gender;
    const selectMedical = medical;
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
      about: register.about,
    };
    if (photo) {
      RegisterData['photo'] = photo;
    }
    if (cv) {
      RegisterData['curriculum'] = curriculum;
    }
    if (documentId) {
      RegisterData['documentId'] = id;
    }
    if (selectGender) {
      RegisterData['gender'] = gender;
    }
    if (selectMedical) {
      RegisterData['medicalKnowledge'] = medical;
    }
    onSubmit(RegisterData);
  };

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
    tutor,
  } = register;

  return (
    <Form className="form-register" onSubmit={handleSubmit}>
      <Form.Label className="role-column">
        <SelectRole
          className="select-role"
          name="role"
          value={role}
          handleChange={handleChangeRegister}
        />
      </Form.Label>
      <Form.Group className="form-group">
        <div>
          <Form.Label for="email" className="register-label">Email</Form.Label>
          <Form.Control
            className="registerForm-mail"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChangeRegister}
            required
          />
        </div>
        <div>
          <Form.Label for="password" className="register-label">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            id="password"
            className="registerForm-password"
            value={password}
            onChange={handleChangeRegister}
            required
          />
        </div>
        <div>
          <Form.Label for="repeatPassword" className="register-label">Repeat password</Form.Label>
          <Form.Control
            type="password"
            name="repeatPassword"
            id="repeatPassword"
            className="registerForm-password"
            value={repeatPassword}
            onChange={event => handleRepeatPassword(event)}
            validate={
              password !== repeatPassword ? 'Password do not match' : null
            }
          />
        </div>
        <div>
          <Form.Label for="name" className="register-label">Name</Form.Label>
          <Form.Control
            className="registerForm-name"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChangeRegister}
            required
          />
        </div>
        <div>
          <Form.Label for="firstFamilyName" className="register-label">Last name</Form.Label>
          <Form.Control
            type="text"
            name="firstFamilyName"
            id="firstFamilyName"
            className="registerForm-name"
            value={firstFamilyName}
            onChange={handleChangeRegister}
            required
          />
        </div>
        <div>
          <Form.Label for="secondFamilyName" className="register-label">Second surname</Form.Label>
          <Form.Control
            type="text"
            id="secondFamilyName"
            placeholder="Only if you hav two family names"
            name="secondFamilyName"
            className="registerForm-name  register-placeholder"
            value={secondFamilyName}
            onChange={handleChangeRegister}
          />
        </div>
        <div>
          <Form.Label for="phone" className="register-label">Phone</Form.Label>
          <Form.Control
            placeholder="Do not forget international prefix"
            type="number"
            name="phone"
            id="phone"
            className="registerForm-name  register-placeholder"
            value={phone}
            onChange={handleChangeRegister}
            required
          />
        </div>
        <div>
          <Form.Label for="username" className="register-label">Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            id="username"
            className="registerForm-name"
            value={username}
            onChange={handleChangeRegister}
            required
          />
        </div>
        <div className="form-gender">
          <Form.Label for="gender" className="label-role register-label">Gender</Form.Label>
          <Form.Select
            name="gender"
            id="gender"
            className="gender-form"
            required
            onChange={event => handleGender(event)}
          >
            <option value="hombre">Male</option>
            <option value="Mujer">Female</option>
            <option value="Otro">Other</option>
          </Form.Select>
        </div>
        <div>
          <Form.Label for="nationality" className="register-label">Nationality</Form.Label>
          <Form.Control
            className="registerForm-nationality"
            type="text"
            id="nationality"
            name="nationality"
            value={nationality}
            onChange={handleChangeRegister}
            required
          />
        </div>
        <div className="form-role">
          <Form.Label for="documentId" className="label-role register-label">
            Type legal identifier
          </Form.Label>
          <Form.Select
            name="documentId"
            id="documentId"
            required
            className="identify-form"
            onChange={event => handleSelectId(event)}
          >
            <option defaultChecked="DNI" selected="selected">
              DNI
            </option>
            <option value="NIF">NIF</option>
            <option value="NIE">NIE</option>
          </Form.Select>
        </div>
        <div>
          <Form.Label for="idNumber" className="register-label">Legal identifier</Form.Label>
          <Form.Control
            type="text"
            name="idNumber"
            id="idNumber"
            className="registerForm-identify"
            value={idNumber}
            onChange={handleChangeRegister}
            required
          />
        </div>
        <div>
          <Form.Label for="bornDate" className="register-label">Birth date</Form.Label>
          <Form.Control
            className="registerForm-date"
            type="date"
            name="bornDate"
            id="bornDate"
            value={bornDate}
            onChange={handleChangeRegister}
            required
          />
        </div>
        <div>
          <Form.Label for="registerForm-photo" className="register-label">Photo</Form.Label>
          <Form.Control
            id="registerForm-photo"
            type="file"
            name="photo"
            value={register.photo}
            onChange={handleChangeFile}
          />
        </div>
        <div>
          <Form.Label for="address" className="register-label">Address</Form.Label>
          <Form.Control
            className="registerForm-country"
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={handleChangeRegister}
            required
          />
        </div>
        {register.role === 'guest' ? (
          <div>
            <Form.Label for="tutorName" className="register-label">Tutor's name</Form.Label>
            <Form.Control
              className="registerForm-name"
              type="text"
              id="tutorName"
              name="tutorName"
              value={tutor}
              onChange={handleChangeRegister}
              required
            />
          </div>
        ) : null}
        <div>
          <Form.Label for="registerForm-CV" className="register-label">Curriculum vitae</Form.Label>
          <Form.Control
            id="registerForm-CV"
            type="file"
            name="cv"
            value={register.curriculum}
            onChange={handleChangeCv}
          />
        </div>
        <div className="form-medical">
          <Form.Label for="medical" className="medical-label register-label">
            Medical knowledge
          </Form.Label>
          <Form.Select
            id="medical"
            name="medical"
            className="medical-form"
            onChange={handleMedical}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Form.Select>
        </div>
        <div>
          <Form.Label for="allergies" className="Allergies-label register-label">
            Allergies
          </Form.Label>
          <Form.Control
            className="registerForm-allergies register-placeholder"
            placeholder="Include here food restrictions due beliefs or habits"
            name="allergies"
            id="allergies"
            value={allergies}
            rows="1"
            onChange={handleChangeRegister}
          />
        </div>
        <div className="about">
          <Form.Label for="about" className="register-label">About you</Form.Label>
          <Form.Control
            placeholder="Brief introduction about yourself"
            type="text"
            name="about"
            id="about"
            className="registerForm-about register-placeholder"
            value={about}
            onChange={handleChangeRegister}
            required
          />
        </div>
        <div></div>
        <div className="registerButton-container">
          <Button
            variant="outline-dark"
            type="submit"
            className="register-button"
            disabled={
              password !== repeatPassword ||
              !name ||
              !firstFamilyName ||
              !nationality ||
              !bornDate ||
              !address ||
              !phone ||
              !username ||
              !email ||
              !about
            }
          >
            Registrar
          </Button>
        </div>
      </Form.Group>
    </Form>
  );
};

export default RegisterForm;
