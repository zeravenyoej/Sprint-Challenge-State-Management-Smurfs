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
            console.log('FROM ACTIONS: ', res.data)
        })
        .catch((err)=>{
            dispatch({ type: FETCH_DATA_FAIL, payload: err })
            console.log('ERROR: ', err)
        })
};


export const postData = (newSmurf) => dispatch => {
    // dispatch({ type: POST_DATA_START })
    axios.post('http://localhost:3333/smurfs', newSmurf)
        .then((res)=>{
            console.log('FROM ACTIONS: ', res)
            dispatch({ type: POST_DATA_SUCCESS, payload: res })
        })
        .catch((err)=>{
            console.log('ERROR: ', err)
            dispatch({ type: POST_DATA_FAIL, payload: err.response})
        })
}