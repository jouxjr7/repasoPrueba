import React, { useState } from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

const PlayersForm = () => {
    const [name,setName]=useState("");
    const [posicion,setPosicion] = useState("");
    const [nameError,setNameError]=useState("");
    const navigate = useNavigate();
    //const [succesfull,setSuccesfull] = useState("");

    const onSubmitHandler= e =>{
        e.preventDefault();
        axios.post('http://localhost:4000/api/player/new',{name,posicion})
            .then(res => {
                console.log(res);
                setName("");
                setNameError("");
                navigate("/");
            })
            .catch(err =>{
                const errorName = err.response.data.errors;

                if(Object.keys(errorName).includes('name')){
                    setNameError(errorName['name'].message);
                }
                else{
                    setNameError("");
                }
            })
    }
    if(nameError === "" ){

    }
    return(

        <form >
            <h1> Favorite Authors</h1>
            <Link to={"/"} >Home</Link>
            <p>Add a new author:</p>
            <label> Name:</label>
            <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)} />
            <p className='error'>{nameError}</p>
            <label> Posicion:</label>
            <input type="text" name="posicion" value={posicion} onChange={(e)=> setPosicion(e.target.value)} />
            <br/>
            <button onClick={onSubmitHandler} > Create </button>
            <Link to={"/"} ><button > Cancel</button></Link>
        </form>
    );
}
export default PlayersForm;