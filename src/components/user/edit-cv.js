import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { getMe } from '../../api/auth';
import './profile.css';

const EditCV = ({CVEdit, cvData, ...props}) => {

    const [oldData, setOldData] = React.useState({});
    const [cv, setCV] = React.useState({});

     const handleCVData = async () => {
    const oldPhoto = await getMe();
    setOldData(oldPhoto.data.curriculum)
  }

  React.useEffect(()=> {
    handleCVData()
  })

    const handleChangeFile = event => {
        const cv = event.target.files[0];
        setCV(cv);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const id = cvData._id;
        const CVFile = cv;
        CVEdit(id, CVFile);
    }

    const myCV = 'http://localhost:5000/uploads/'+oldData;

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
                <Card>
                    <Card.Body>Ningún archivo subido</Card.Body>
                </Card>
            :
                <Card>
                    <Card.Body>{cvData.name}_CV.pdf</Card.Body>
                    <Card.Link className='preview' href={myCV} target="_blank">Preview</Card.Link>
                </Card>
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