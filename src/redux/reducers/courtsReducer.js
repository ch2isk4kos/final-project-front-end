export default function courtsReducer(state = {courts: []}, action) {
    switch(action.type) {
        case 'FETCH_COURTS':
            return action.courts

        case 'ADD_COURT':
            return {...state, courts: [...action.court]}

        default:
            return state
    }
}
