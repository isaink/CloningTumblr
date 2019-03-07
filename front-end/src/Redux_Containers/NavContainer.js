import { connect } from 'react-redux';
import { checkAuthenticateStatus, LogOutUser} from '../Redux_Actions/authAction'; 
import { Nav } from './../components/menus/Navbar';

const mapStateToProps = state => {
    return {
        user: state.userAuth.user,
        buttons: state.toggleButtons.buttons
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOutUser: () => dispatch(LogOutUser()),
        checkAuthenticateStatus: () => {
            dispatch( checkAuthenticateStatus())
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps )(Nav)