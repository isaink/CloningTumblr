import { connect } from 'react-redux';
import { fetchRandomBG } from '../Redux_Actions/actionPosts';
import { sessionStarting } from '../Redux_Reducers/userAuthReducer';
import { newUser, logInUser } from '../Redux_Actions/authAction'; 

import  Welcome from './../components/welcome/Welcome1';
// import DashBoard from './../components/users/Dashboard';

const mapStateToProps = (state) => {
    // console.log("this is the state ", state)
    return { 
        img: state.img,
        user: state.user,  
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRandomBG: () => dispatch( fetchRandomBG() ),
        sessionStarting: () => dispatch( sessionStarting() ),
        newUser: (user) => dispatch( newUser(user) ),
        logInUser: (user) => dispatch( logInUser(user) ),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)