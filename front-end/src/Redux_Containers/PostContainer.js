import { connect } from 'react-redux';
import  DashBoard  from './../components/board/Dashboard';
import { receivedPosts } from './../Redux_Actions/postsAction';

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        receivedPosts: () => dispatch(receivedPosts())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)