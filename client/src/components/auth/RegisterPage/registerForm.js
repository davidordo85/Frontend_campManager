import React from 'react';
import SelectRole from './SelectRole';
import { Form, Button } from 'react-bootstrap';
//import './registerForm.css';

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
      console.log(event.target.name, event.target.value);
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

  console.log(register);

  return (
    <Form className="form-register" onSubmit={handleSubmit}>
      <Form.Group className="form-group">
        <SelectRole
          className="select-role"
          name="role"
          value={role}
          handleChange={handleChangeRegister}
        />
        <Form.Label>Email</Form.Label>
        <Form.Control
          className="registerForm-mail"
          type="email"
          name="email"
          value={email}
          onChange={handleChangeRegister}
          required
        />
        <Form.Label>Name</Form.Label>
        <Form.Control
          className="registerForm-name"
          type="text"
          name="name"
          value={name}
          onChange={handleChangeRegister}
          required
        />
        <Form.Label>Last name</Form.Label>
        <Form.Control
          type="text"
          name="firstFamilyName"
          className="registerForm-name"
          value={firstFamilyName}
          onChange={handleChangeRegister}
          required
        />
        <Form.Label>Second surname</Form.Label>
        <Form.Control
          type="text"
          name="secondFamilyName"
          className="registerForm-name"
          value={secondFamilyName}
          onChange={handleChangeRegister}
        />
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="number"
          name="phone"
          className="registerForm-name"
          value={phone}
          onChange={handleChangeRegister}
          required
        />
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          className="registerForm-name"
          value={username}
          onChange={handleChangeRegister}
          required
        />
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          className="registerForm-password"
          value={password}
          onChange={handleChangeRegister}
          required
        />
        <Form.Label>Repeat password</Form.Label>
        <Form.Control
          type="password"
          name="repeatPassword"
          className="registerForm-password"
          value={repeatPassword}
          onChange={event => handleRepeatPassword(event)}
          validate={
            password !== repeatPassword ? 'Password do not match' : null
          }
        />
        <Form.Select
          name="documentId"
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
        <Form.Label>Legal identifier</Form.Label>
        <Form.Control
          type="text"
          name="idNumber"
          className="registerForm-identify"
          value={idNumber}
          onChange={handleChangeRegister}
          required
        />
        <Form.Label>Nationality</Form.Label>
        <Form.Control
          className="registerForm-nationality"
          type="text"
          name="nationality"
          value={nationality}
          onChange={handleChangeRegister}
          required
        />
        <Form.Label className="gender-label">Gender</Form.Label>
        <Form.Select
          name="sex"
          className="gender-form"
          required
          onChange={event => handleGender(event)}
        >
          <option value="hombre">Man</option>
          <option value="Mujer">Woman</option>
          <option value="Otro">Other</option>
        </Form.Select>
        <Form.Label>Born date</Form.Label>
        <Form.Control
          className="registerForm-date"
          type="date"
          name="bornDate"
          value={bornDate}
          onChange={handleChangeRegister}
          required
        />
        <Form.Label>Photo</Form.Label>
        <Form.Control
          className="registerForm-date"
          type="file"
          name="photo"
          value={register.photo}
          onChange={handleChangeFile}
        />
        <Form.Label>Address</Form.Label>
        <Form.Control
          className="registerForm-country"
          type="text"
          name="address"
          value={address}
          onChange={handleChangeRegister}
          required
        />
        {register.role === 'guest' ? (
          <div>
            <Form.Label>Tutor's name</Form.Label>
            <Form.Control
              className="registerForm-name"
              type="text"
              name="name"
              value={tutor}
              onChange={handleChangeRegister}
              required
            />
          </div>
        ) : null}
        <Form.Label>Curriculum vitae</Form.Label>
        <Form.Control
          className="registerForm-CV"
          type="file"
          name="cv"
          value={register.curriculum}
          onChange={handleChangeCv}
        />
        <Form.Label className="medical-label">
          You have medical knowledge?
        </Form.Label>
        <Form.Select
          name="medical"
          className="medical-form"
          onChange={handleMedical}
        >
          <option value={true}>Sí</option>
          <option value={false}>No</option>
        </Form.Select>
        <Form.Label className="Allergies-label">Allergies?</Form.Label>
        <Form.Control
          className="registerForm-allergies"
          name="allergies"
          value={allergies}
          rows="1"
          onChange={handleChangeRegister}
        />
        <Form.Label>About you</Form.Label>
        <Form.Label
          as="textarea"
          name="about"
          className="registerForm-name"
          value={about}
          onChange={handleChangeRegister}
          required
        />
      </Form.Group>
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
    </Form>
  );
};

export default RegisterForm;
