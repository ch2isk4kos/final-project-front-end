export const addCourt = (state) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/courts', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(state)
        })
        .then(response => response.json())
        .then(court => dispatch({type: 'ADD_COURT', court}))
    }
}
