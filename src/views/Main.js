import React,{useEffect, useState} from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';

export default props => {
    const[allpets, setAllPets]=useState([]);

    useEffect(()=>{
        Axios.get(`http://localhost:8000/api/pet`)
        .then(res=>{
            console.log("**********", res)
            setAllPets(res.data)
        })
        .catch(err=>console.log(err))
    },[]);

    return ( 
    <div >
<h1>These pets are looking for a good home</h1>
<Link to="/pets/new">add a pet to the shelter</Link>
<table className="table table-danger col-8 mx-auto">
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
        </tr>
        {
                allpets.map((pet,index)=>{
                        return <tr key={index.id}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td><Link to={`/pets/${pet._id}`}><button>Details</button></Link>| <Link to={`/pet/${pet._id}/edit`}> <button>Edit</button></Link></td>
                </tr>
            })
        }
</table>
    </div>
    )
}