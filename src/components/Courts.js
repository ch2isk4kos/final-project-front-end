import React from 'react'

const Courts = props => {

    const courts = props.courts.length > 0 ?
        props.courts.map(court => (<h4 key={court.id}>{court.name}</h4>)) :
        null

    return (
    <div>
        <h1>Courts</h1>
        { courts }
    </div>
    )
}

export default Courts;
