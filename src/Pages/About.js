import React from 'react'

export default function About() {
    return (
        <div>
           <h1 className="header"> About<br/>Frontend Development</h1>
           <button className="btn"><span className="btnfill"><span>More</span><span><img className="image" src="../right arrow.svg" alt="right arrow"/></span></span></button>
           <h1 className="content">This is About page</h1>
        </div>
    )
}
