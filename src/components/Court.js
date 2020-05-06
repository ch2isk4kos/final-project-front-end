import React from 'react'

const Court = props => {

    const court = props.courts.length > 0 ?
        props.courts.filter(c => c.id == props.match.params.id)[0] :
        null

    return (
    <div>
        <h3>{court && court.name}</h3>
        <img src={court && court.img_url} width="500" height="300"></img>
        <h5>{court && court.address}</h5>
    </div>
    )
}

export default Court;
