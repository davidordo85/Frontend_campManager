import React from 'react';
import './filter.css';
import FilterButton from '../Buttons/FilterButton';
import CheckboxFilter from './CheckboxFilter';
import  moment from 'moment';



const FilterCamps = ({ onSubmit }) => {

    var today = moment().format('YYYY-MM-DD');

    const [filterCamp, setFilterCamp] = React.useState({
        name: '',
        date: '',
        location: '',
        activities: []
    });
    

    React.useEffect(()=> {
        setFilterCamp(filterCamp, [])
    });
    
    const handleSubmit = event => {
    event.preventDefault();
    onSubmit(filterCamp);
    console.log(onSubmit)
    };


    // TODO FILTER DATE
    // const [dateSince, setDateSince] = React.useState('');
    // const [dateUntil, setDateUntil] = React.useState('');

    // const getCampsByDate = (dateSince, dateUntil) => {
    //     let newDate = [];
    //     // PENSAR LÓGICA
    // }

    const handleFilterByName = event => {
        const newFilterCamp = {
            ...filterCamp,
            name: event.target.value
        };
        setFilterCamp(newFilterCamp)
    };
    const handleFilterByLocation = event => {
        const newFilterCamp = {
            ...filterCamp,
            location: event.target.value,
        };
        setFilterCamp(newFilterCamp)
    };


    
    

    const addActivities = (activity, selectedActivity) => {
        return activity.concat([selectedActivity])
    };
    const removeTag = (activity, selectedActivity) => {
        return activity.filter(activity => activity !== selectedActivity)
    };

    const setActivity = event =>  {
        const activity = filterCamp.activities
        const activityName = event.target.value
        
        if (event.target.checked) {
            if (!activity.includes(activityName)) {
                const newActivity = addActivities(activity, activityName)
                setFilterCamp({...filterCamp, activities: newActivity})
            }
        } else {
            const index = activity.indexOf(activity, activityName)
            if (index <= 0) {
                const newActivity = removeTag(activity, activityName)
                setFilterCamp({...filterCamp, activities: newActivity})
            }
        }
    }
    const {name, activities, location} = filterCamp;
   
    const activityList = [
        'piscina',
        'taller de artesanias',
        'taller de reciclaje',
        'lectura',
        'museo', 
        'senderismo',
        'pintura',
        'canto',
        'teatro',
    ]
    return (
        <form className='box' onSubmit={handleSubmit}>
            <input
                className='filter-name'
                type='text'
                placeholder='Busca el nombre del campamento'
                 value={name}
                onChange={handleFilterByName}
                />
                <label>Desde:</label>
                <input 
                    className='filter-date'
                    type='date'
                    placeholder='desde'
                    // value={date}
                    min={today}
                    max='2025-12-31'
                />
                <label>Hasta:</label>
                <input 
                    className='filter-date'
                    type='date'
                    placeholder='hasta'
                    // value={date}
                    min='2021-01-01'
                    max='2025-12-31'
                />
                <input
                className='filter-name'
                type='text'
                placeholder='Busca por país..'
                value={location}
                onChange={handleFilterByLocation}
                />
                <div className='tag-box'>
                {activityList.map(activity => {return (
                        <CheckboxFilter
                            classNames='filter-tag'
                            name={activity}
                            value={activity}
                            label={activity}
                            handleChange={setActivity}
                        />
                        )}
                    )}
                </div>  
            <FilterButton type='submit'>Filtrar</FilterButton>
        </form>
    )
}

export default FilterCamps;