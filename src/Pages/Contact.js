import React from 'react'
import './page.css'

export default function Contact() {
    return (
        <div className="contactcontainer">
           <div className="contactpart1">
                <div><h1 className="header">Contact <br/> frontend development</h1>
                </div> 
                <div><button className="btn">call</button>
                <h1 className="content">this is the contact page</h1>
                </div>
           </div>
           <div className="contactpart2">
                <div className="fac">Ejiro A <br/> facilitator<br/> 0813-456-5674</div>
                <div className="fac">Emeka A <br/> facilitator<br/> 0813-456-5674</div>
           </div>
           
        </div>
    )
}
