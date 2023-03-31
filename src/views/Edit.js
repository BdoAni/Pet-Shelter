import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


export default props => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/` + props.id)
            .then(res => {
                setName(res.data.pet.name);
                setType(res.data.pet.type);
                setDescription(res.data.pet.description);
                setSkills(res.data.pet.skills)
                setLoaded(true);
            })
    }, []);

    const updateAuthor = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pet/` + props.id, {
            name,
            type,
            description,
            skills
        })
            .then(res => {
                console.log(res);
                if (res.data.errors) {
                    setErrors(res.data.errors.errors)
            }else { navigate("/") }
            
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h3>Edit Garfield</h3>
            <form onSubmit={updateAuthor}>
                <Link to={`/`}>Home</Link><br />
                <lable htmlFor="Name">Pet Name:</lable>
                <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name}/>
                {/* If I have an error display it it is for validation */}
                <span>{errors.name ? errors.name.message: ''}</span>
                <br />
                <lable htmlFor="Type">Pet Type:</lable>
                <input type="text" name="type" onChange={(e) => setType(e.target.value)} value={type} />
                <span>{errors.type ? errors.type.message: ''}</span>
                <br />
                <lable htmlFor="Description">Pet Description:</lable>
                <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} value={description} />
                <span>{errors.description ? errors.description.message: ''}</span>
                <br />
                <lable>Skills (optional):</lable><br />
                <lable htmlFor="Skill 1">Skill 1:</lable>
                <input type="text" name="skills" onChange={(e) => setSkills(e.target.value)} value={skills} /><br />
                <lable htmlFor="Skill 2">Skill 2:</lable>
                <input type="text" name="skills" onChange={(e) => setSkills(e.target.value)} value={skills} /><br />
                <lable htmlFor="Skill 3">Skill 3:</lable>
                <input type="text" name="skills" onChange={(e) => setSkills(e.target.value)} value={skills} /><br />
                <input type="submit" value="add Pet" />
            </form>
        </div>
    )


}