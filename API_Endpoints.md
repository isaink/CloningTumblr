#API Endpoints

##HTML API

###Root
 - GET /
    - Loads React web app.
    - **Info** Page w/ **LogIn** session
        tumblr/
    - User **Home** page where you see all the following post with timeline.
        tumblr/dashboard 

##JSON API

###Users
- GET /
    - get all users-blogger on Tumblr
        tumblr/users
    - get individual user info
        tumblr/user/:id 
- POST / 
    - Create a user account.
- DELETE /
    - Delete user account.

###Session
- POST /
    - Creates new session on user login
        tumblr/session
- DELETE 
    - Deletes session on user logout
        tumblr/session

<!-- userDashboard
userFollowing
userLikes -->

###Tag

###Follows
- GET /
    - get all the bloggers following
        tumblr/following
    - get individual follow posts
    - tumblr/:id
- POST / 
    - Update your follows.
- DELETE /
    - Delete follows & stop following.

###Likes

###Posts
 - GET / 
    - get to see the post of the user individualy or all together.
        tumblr/posts/user/:id
    - get post for types of multimedia.
        tumblr/posts/{type}
- POST/
    - tumblr/
- PATH/ 
    - 

###Search
 - GET/ 
    - get what your a looking.
    /search/{name}
- PATH
    - update your search.
    /search/{name}
createPost
editPost
reblogPost
deletePost
<!-- taggedPosts -->