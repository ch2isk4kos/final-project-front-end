import React from 'react'
import { Link } from 'react-router-dom'

const Courts = props => {

    const courts = props.courts.length > 0 ?
        props.courts.map(court => (<h4 key={court.id}><Link to={`/courts/${court.id}`}>{court.name}</Link></h4>)) :
        null

    return (
    <div>
        <h1>Courts</h1>
        { courts }
    </div>
    )
}

export default Courts;
