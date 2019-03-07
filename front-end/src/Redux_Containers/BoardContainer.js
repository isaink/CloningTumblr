import { connect } from 'react-redux';
import Board from './../components/board/Board';
import { userInfo } from './../Redux_Actions/boardAction';
import { newUser, checkAuthenticateStatus } from '../Redux_Actions/authAction'; 

const mapStateToProps = (state) => {
    return { 
        user: state.userAuth.user   
    }
};


export default connect(mapStateToProps, null)(Board)