import { connect } from 'react-redux';
import {fetchRandomPost} from '../../actions/actionPosts';
import  {Welcome } from './Welcome.js';

const mapStateToProps = (state) => {
    return { 
        post: state.post
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getRandomPost: () => dispatch( fetchRandomPost() )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)