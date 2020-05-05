export function fetchCourts() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/courts')
        .then(response => response.json())
        .then(courts => dispatch({
            type: 'FETCH_COURTS',
            courts
        }))
    }
}
