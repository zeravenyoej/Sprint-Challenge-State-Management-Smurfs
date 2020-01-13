import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';

export const POST_DATA_START = 'POST_DATA_START';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_FAIL = 'POST_DATA_FAIL';

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA_START })
    axios.get('http://localhost:3333/smurfs')
        .then((res)=>{
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
            console.log('FROM ACTIONS: ', res)
        })
        .catch((err)=>{
            dispatch({ type: FETCH_DATA_FAIL, payload: err })
            console.log('ERROR: ', err)
        })
};
