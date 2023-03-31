import React, { useState} from 'react';
import axios from 'axios';
import { Link, navigate} from '@reach/router';


export default (props)=>{
    const[name, setName]=useState("");
    const[type, setType]=useState("");
    const[description, setDescription]=useState("");
    const[skills, setSkills]=useState("")
    const [errors, setErrors] = useState({})


    const onSubmitHandler = (e) => {
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/pet', {
            name,
            type,
            description,
            skills,
        })
            .then(res => {
                console.log(res);
                if (res.data.errors) { setErrors(res.data.errors.errors) 
                }else { navigate("/") }
                
            })
            .catch(err => console.log(err))
}
    return(
        <div>
            <h3>Know a pet needing a home?</h3>
            <Link to={`/`}> back to home</Link><br />
            <form onSubmit={onSubmitHandler}>
                <lable htmlFor="Name">Pet Name:</lable>
                <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name}/><br/>
                {/* If I have an error display it it is for validation */}
                <span>{errors.name ? errors.name.message : ''}</span>
                <br />
                <lable htmlFor="Type">Pet Type:</lable>
                <input type="text" name="type" onChange={(e) => setType(e.target.value)} value={type}/><br/>
                <span>{errors.type ? errors.type.message: ''}</span>
                <br/>
                <lable htmlFor="Description">Pet Description:</lable>
                <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} value={description}/><br/>
                <span>{errors.description? errors.description.message: ''}</span>
                <br/>
                <lable>Skills (optional):</lable><br />
                <lable htmlFor="Skill 1">Skill 1:</lable>
                <input type="text" name="skills" onChange={(e) => setSkills(e.target.value)} value={skills} /><br />
                <lable htmlFor="Skill 2">Skill 2:</lable>
                <input type="text" name="skills" onChange={(e) => setSkills(e.target.value)} value={skills} /><br />
                <lable htmlFor="Skill 3">Skill 3:</lable>
                <input type="text" name="skills" onChange={(e) => setSkills(e.target.value)} value={skills} /><br />
                <input type="submit" value="add Pet" />
                {/* |<Link to={`/`}><button>Cancel</button></Link> */}
            </form>
        </div>
        )


}