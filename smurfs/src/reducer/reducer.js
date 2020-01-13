// import React from 'react';
import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from '../actions/actions';

const initialState = {
    smurfs: [{
        name: 'JOEY SMURF',
        age: 31,
        height: '5c',
        id: -1
        }],
    isFetching: false, 
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DATA_START:
            return {
                ...state, 
                isFetching: true
            };
        case FETCH_DATA_START:
            return {
                ...state, 
                smurfs: [...state.smurfs, action.payload],
                isFetching: false
            };
        case FETCH_DATA_FAIL:
            return {
                ...state, 
                error: action.payload
            };
        default: 
            return state;
    }
};

export default reducer;