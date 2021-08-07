import React from 'react'

export default function UserCard(props) {
    return (
        <div>
           <p>{props.count}</p> 
           <button onClick={props.handleClick}>Increase</button><br></br>
           <button onClick={props.handleClick2}>Decrease</button>
        </div>
    )
}
