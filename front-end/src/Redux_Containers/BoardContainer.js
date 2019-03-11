import { connect } from 'react-redux';
import Dashboard from '../components/board/Dashboard';
import { fetchPosts } from './../Redux_Actions/postsAction';
// import { userInfo } from './../Redux_Actions/boardAction';

const mapStateToProps = (state) => {
    console.log(state,'STATE')
    return { 
        // user: state.userAuth.user,
        posts: state.posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps )(Dashboard)