import { connect } from 'react-redux';
import { logOutUser} from '../Redux_Actions/authAction'; 
import Nav  from './../components/menus/Navbar';

const mapStateToProps = state => {
    return {
        isLoggedIn: state.userAuth.isLoggedIn
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logOutUser: () => dispatch(logOutUser()),
    }
};
 
export default connect(mapStateToProps, mapDispatchToProps )(Nav)