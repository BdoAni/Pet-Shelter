import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';


export default props => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState("")
    const {id}=props;
    const [pet, setPet] = useState({})
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/`+ id)
            .then(res => {
                setPet(res.data.pet);
                setName(res.data.pet.name);
                    setType(res.data.pet.type);
                    setDescription(res.data.pet.description);
                    setSkills(res.data.pet.skills);
                setLoaded(true);
            })
            .catch(err => console.log(err.message))
    }, []);

    const deletePet=(petId)=>{
        axios.delete(`http://localhost:8000/api/pet/`+ petId)
        .then(res => {
            navigate('/')
        })
    }
    return (
        <div>
            <Link to={`/`}> back to home</Link><br />
            <h2>Details about: {pet.name}</h2>
            <h1>{pet.name}</h1>
            <p>Pet Type: {pet.type}</p>
            <p>Descrition: {pet.description}</p>
            <p>Skills: {pet.skills}</p>
            <button onClick={(e)=> deletePet(pet._id)}>Adopt{pet.name}</button>
        </div>
    )
}