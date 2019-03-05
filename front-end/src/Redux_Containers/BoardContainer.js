import { connect } from 'react-redux';
import Board from './../components/board/Board';
import { newUser, checkAuthenticateStatus } from '../Redux_Actions/authAction'; 

const mapStateToProps = (state) => {
    return { 
        user: state.userAuth   
    }
};


export default connect(mapStateToProps, null)(Board)