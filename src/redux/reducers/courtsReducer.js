export default function courtsReducer(state = {courts: []}, action) {
    switch(action.type) {
        case 'FETCH_COURTS':
            return action.courts

        default:
            return state
    }
}
