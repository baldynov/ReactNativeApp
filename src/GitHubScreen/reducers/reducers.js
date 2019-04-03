import actionTypes from '../actions/actionTypes'

export default function gitHub(state = {}, action) {
    switch (action.type) {
        case actionTypes.GIT_HUB_REQUEST:
            return {...state, fetching: true};
        case actionTypes.GIT_HUB_FAIL:
            return {...state, fetching: false};
        case actionTypes.GIT_HUB_GET_DATA:
            return {...state, fetching: false, data: action.payload};
        default:
            return state;
    }
}

