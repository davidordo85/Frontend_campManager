import React from 'react';
import './campList.css';
import EmptyList from './EmptyList';
import Layout from '../layout/layout';
import { getAllCamps } from '../../api/camps';
import Loader from '../Loader/Loader';
import Target from './Target';


const CampList = ({...props}) => {

    const [camps, setCamps ] = React.useState([]);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        getCamps()
    }, [])
    
    const getCamps = async () => {
        const campsList = await getAllCamps();
        setCamps(campsList.data)
        console.log('--->', campsList.data)
    };

    console.log(camps.map(camp => camp.activities))

    const camp = [
        {
            name: 'Campamento Valencia',
            location: 'Valencia, España',
            descriptionshort: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s,',
            places: 3,
            maxPlaces: 20,
            tags: 'playa',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        },    
    ]
   
    return (
        <Layout>
            <div>
                {camp.map(camp => 
                    <Target
                    classNames={camp.tags === 'playa' ? 'container' : 'container1'}
                    tittle={camp.name}
                    location={camp.location}
                    places={camp.places}
                    occupiedPlaces={camp.maxPlaces}
                    description={camp.description}
                    />)}
            </div>
        </Layout> 
    )
};

export default CampList;