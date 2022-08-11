
import { Button } from 'react-bootstrap';

const Profile  = ({name,bio,profession,handlename,children}) =>{
    return (
        <>
            <h1>{name}</h1>
            <h3>{profession}</h3>
            <ul className="point">
                {
                    bio.map ((el,i,t) => <li key={i}>{el}</li>)
                }
                </ul>
                <div className="img">
                {
                    children
                }

                </div>
            
            <Button variant="outline-success" on onClick={()=>handlename('bik')}>Alerte</Button>{' '}
            

        

        </>

    )

}
export default Profile
