import {constantAuth} from './actions';

const initialState = {
    isAuth: false,
    user: {},
    isLoading: false,
    error: ''
}

export default function authReducer(state = initialState, action) {
    switch(action.type) {

        case constantAuth.SET_IS_AUTH:
            return {...state, isAuth: action.payload, isLoading: false}

        case constantAuth.SET_ERROR:
            return {...state, isLoading: false, error: action.payload}

        case constantAuth.SET_USER:
            return {...state, user: action.payload}

        case constantAuth.SET_IS_LOADING:
            return {...state, isLoading: action.payload}

        default:
            return state;
    }
}