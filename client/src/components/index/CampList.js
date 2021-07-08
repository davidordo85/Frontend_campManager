import React from 'react';
import EmptyList from './EmptyList';
import Layout from '../layout/layout';
import { getAllCamps } from '../../api/camps';
import Loader from '../Loader/Loader';
import Target from './Target';


const CampList = ({...props}) => {

    const [camps, setCamps ] = React.useState([]);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState('');

    React.useEffect(() => {
        getCamps()
    }, [])
    
    const getCamps = async () => {
        try{
            setLoading(true)
            const campsList = await getAllCamps();
            setCamps(campsList.data)    
        } catch {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <div>
                 <Loader hidden={!loading}  />
                {camps.length > 0 ?
                camps.map(camp =>
                    <Target
                    tags={camp.tag}
                    tittle={camp.name}
                    location={camp.location}
                    places={camp.capacity}
                    occupiedPlaces={camp.inPeople}
                    description={camp.description}
                    />) :
                    <EmptyList 
                        title='Aún no se ha registrado nadie, ¡Se el primero!'
                        description='Tan solo tienes que registrarte y publicar tu campamento. En caso de tener cuenta, accede y publicalo.'/>
                    }
            </div>
        </Layout> 
    )
};

export default CampList;