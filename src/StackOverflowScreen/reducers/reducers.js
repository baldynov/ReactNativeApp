import actionTypes from '../actions/actionTypes'

export default function stackOverflow(state = {}, action) {
    switch (action.type) {
        case actionTypes.STACK_OVERFLOW_REQUEST:
            return {...state, fetching: true};
        case actionTypes.STACK_OVERFLOW_FAIL:
            return {...state, fetching: false};
        case actionTypes.STACK_OVERFLOW_GET_DATA:
            return {...state, fetching: false, data: action.payload};
        default:
            return state;
    }
}

