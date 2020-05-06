export default function courtsReducer(state = {courts: []}, action) {
    switch(action.type) {
        case 'FETCH_COURTS':
            return action.courts

        case 'ADD_COURT':
            const court = Object.assign({}, ...state, action.court)
            console.log(court)
            return [ ...state, court ]

        default:
            return state
    }
}
