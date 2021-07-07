// import React from 'react';
import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL, POST_DATA_FAIL, POST_DATA_SUCCESS } from '../actions/actions';

const initialState = {
    smurfs: [{
        name: 'JOEY SMURF',
        age: 31,
        height: '5cm',
        id: -1
        }],
    isFetching: false, 
    isPosting: false,
    fetchingError: '',
    postingError: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DATA_START:
            return {
                ...state, 
                isFetching: true
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state, 
                smurfs: [...state.smurfs, ...action.payload],
                isFetching: false, 
                fetchingError: ''
            };
        case FETCH_DATA_FAIL:
            return {
                ...state, 
                fetchingError: action.payload
            };
        case POST_DATA_SUCCESS: 
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload],
                isPosting: false, 
                postingError: ''
            };
        case POST_DATA_FAIL:
            return {
                ...state,
                postingError: action.payload
            };
        default: 
            return state;
    }
};

export default reducer;