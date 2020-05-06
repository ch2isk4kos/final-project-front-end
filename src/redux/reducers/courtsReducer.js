export default function courtsReducer(state = {courts: []}, action) {
    switch(action.type) {
        case 'FETCH_COURTS':
            return action.courts

        case 'ADD_COURT':
            const copy = Object.assign({}, state, action.court)
            return [...state, copy]

        default:
            return state
    }
}
