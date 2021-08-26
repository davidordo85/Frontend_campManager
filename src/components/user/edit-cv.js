import React from 'react';
import { Form, Button } from 'react-bootstrap';
import {  getMe } from '../../api/auth';
import './profile.css';

const EditCV = ({CVEdit, ...props}) => {

    const [oldData, setOldData] = React.useState({});
    const [cv, setCV] = React.useState({});

    React.useEffect(() => {
        handleOldData();
    }, []);

    const handleOldData = async () => {
      const myOldData = await getMe();
      setOldData(myOldData.data);
    };

    const handleChangeFile = event => {
        const cv = event.target.files[0];
        setCV(cv);
    };
 
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const CVFile = cv;
        CVEdit(CVFile);
    }

    console.log(oldData)


    return (
        <div className='editCV'>
            <Form onSubmit={ handleSubmit } className="profile-edit-cv">
            <Form.Label>Curriculum vitae</Form.Label>
                <Form.Control
                    className="registerForm-CV"
                    type="file"
                    name="cv"
                    value={null}
                    onChange={handleChangeFile}
                />

                {oldData.curriculum === '' ?
                <h5>No hay ningún archivo subido</h5>
            :
                <img src={null} />
            }

                <Button
                    variant="outline-dark"
                    type="submit"
                    className="edit-photo-button"
                >
                Edit CV
                </Button>

            </Form>
        </div>
    )
}

export default EditCV;