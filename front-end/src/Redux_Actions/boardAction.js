import axios from 'axios';
export let FETCHING_USER_PROFILE  = 'FETCHING_PIC_PROFILE';

export const receivedUser = ( user ) => {
    return {
        type: FETCHING_USER_PROFILE,
        user
    }
};
export const userInfo = () => dispatch => {
    return  axios.get("/dashboard")
    .then( (res) => {
        console.log(res.data.info, 'userINfo' )
    })
    .catch(err => {
        console.log("Got error", err)
    })
};

