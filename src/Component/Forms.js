import React from 'react'
import { useState } from 'react'

export default function Form() {
    const [input, setIput] = useState({
        firstName: '',
        secondName: '',
        email: ''
    });
    const handleChange = (e) =>{
        setIput({...input, [e.target.name]: e.target.value});
        e.preventDefault();
        console.log(input);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(input.firstName && input.secondName && input.email){
            alert(`Thank you ${input.firstName}`);
        }
        else{
            alert('please fill the form correctly')
        }
    }
    return (
        <div>
            <input type="text" onChange={(e)=> handleChange(e)} name="firstName" placeholder='firstname'></input>
            <input type="text" onChange={(e)=> handleChange(e)} name="secondName" placeholder='secondname'></input>
            <input type="text" onChange={(e)=> handleChange(e)} name="email" placeholder='email'></input>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
