import React from 'react'
import { useParams } from 'react-router-dom'

export default function RouteParam() {
    let {id} = useParams();
    return (
        <div>
           Hello... {id} 
        </div>
    )
}
