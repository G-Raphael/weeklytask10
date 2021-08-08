import React from 'react'
import './page.css'

export default function Home() {
    return (
        <div className="home">
          <h1 className="header">Front end web<br/> Development</h1>
          <button className="btn"><span className="btnfill"><span>More</span><span><img className="image" src="../right arrow.svg" alt="right arrow"/></span></span></button>
          <h1 className="content">This is the home page</h1>

        </div>
    )
}
