import React from 'react';
import Layout from '../layout/layout';
import UserDashboard from './dashboard-user';
import { getMe } from '../../api/auth';
import { Card } from 'react-bootstrap';
import { getCampDetail } from '../../api/camps';
import Target from '../index/Target';
import Loader from '../Loader/Loader';


const UserRequest = ({ ...props }) => {
  
 
    
    const [oldData, setOldData] = React.useState({});
    const [campRequest, setCampRequest] = React.useState({});
    const [campDate, setCampDate] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);


    const idCamp = props.requested;
    console.log(idCamp)


    React.useEffect(() => {
      campDetail();
    }, []);

    const campDetail = async props => {
      setLoading(true);
      setError(null)
      try {
    
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }


    return (
        <Layout { ...props}>
            <UserDashboard />
            <div className='container-camps'>
        <Card className="container-card">
          <Loader hidden={!loading} />
          <Card className="card-list" border="light">
              <h1>Acepted Camps</h1>
             
              {/* {campRequest.length < 1 ? <Loader hidden={!loading} /> : campRequest.map((camp, index) =>(
                <Target 
                  key={index}
                  tags={camp.tag}
                  tittle={camp.name}
                  places={camp.capacity}
                  occupiedHelpers={camp.confirmedHelpers.length}
                  occupiedGuests={camp.confirmedGuests.length}
                  location={camp.location}
                  />
              ) )} */}
              <h1>Camps Request</h1>
              { }
            
              {/* {camps.map((camp, index) => (
                <Target
                  key={index}
                  id={camp._id}
                  tags={camp.tag[0]}
                  tittle={camp.name}
                  location={camp.location}
                  places={camp.capacity}
                  // occupiedHelpers={camp.confirmedHelpers.length}
                  // occupiedGuests={camp.confirmedGuests.length}
                  description={camp.description}
                  history={history}
                />
              ))} */}
            
          </Card>
        </Card>
      </div>
    </Layout>
    )
}


export default UserRequest;