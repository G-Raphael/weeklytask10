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
        if(input.username !=='' && input.password !==''){
            alert(`Welcome ${input.username}`);
        }
        else{
            alert('please fill the form correctly');
        }
    }
    return (
        <div className="logincontainer">
            <div className="container">
            <input className="login1" type="text" onChange={(e)=> handleChange(e)} name="username" placeholder='username'></input><br/>
            <input className="login2" type="password" onChange={(e)=> handleChange(e)} name="password" placeholder='password'></input><br/>
    
            <button className="loginbtn " onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}