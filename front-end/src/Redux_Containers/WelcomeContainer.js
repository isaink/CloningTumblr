import { connect } from 'react-redux';
import { fetchRandomBG } from '../Redux_Actions/postsAction';
// import { sessionStarting } from '../Redux_Reducers/userAuthReducer';
import { newUser, logInUser } from '../Redux_Actions/authAction'; 

import  Welcome from '../components/welcome/Welcome';
// import DashBoard from './../components/users/Dashboard';

const mapStateToProps = (state) => {
    return { 
        img: state.img,
        user: state.userAuth.username,   
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRandomBG: () => dispatch( fetchRandomBG() ),
        newUser: (user) => dispatch( newUser(user) ),
        logInUser: (user) => dispatch( logInUser(user) ),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)