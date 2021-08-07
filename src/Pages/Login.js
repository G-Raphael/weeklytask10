import React from 'react'
import { useState } from 'react'

export default function Login() {
    const [input, setIput] = useState({
        username: '',
        password: '',
    });
    const handleChange = (e) =>{
        setIput({...input, [e.target.name]: e.target.value});
        e.preventDefault();
        console.log(input);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(input.username!== null){
            alert(`Thank you ${input.username}`);
        }
        else{
            alert('please fill the form correctly')
        }
    }
    return (
        <div>
            <input type="text" onChange={(e)=> handleChange(e)} name="username" placeholder='username'></input><br/>
            <input type="password" onChange={(e)=> handleChange(e)} name="password" placeholder='password'></input><br/>
    
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}