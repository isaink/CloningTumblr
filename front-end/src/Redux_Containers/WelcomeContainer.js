import { connect } from 'react-redux';
import { fetchRandomBG } from '../Redux_Actions/postsAction';
import { newUser, logInUser, checkAuthenticateStatus, LogOutUser } from '../Redux_Actions/authAction'; 
import  Welcome from '../components/welcome/Welcome';

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
        checkAuthenticateStatus: () => {
            dispatch( checkAuthenticateStatus())
        },
        logOutUser: () => dispatch(LogOutUser()),
    }
            
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);