# API Endpoints

## HTML API

### Root
 - `GET `
    - Loads React web app.
        `influers/` & `influers/dashboard `
**Info** Page w/ **LogIn** session.
User **Home** page where you see all the following post with timeline.

## JSON API

### Users
 - `GET`
    - get individual user info.
       `/influers/user/:id` 
 - `POST` 
    - Create a user account.
        `/influers/users`
 - `DELETE`
    - Delete user account.
    `/influers/user/:id`
 - `PATCH`
    - update info user account.

### Tag
 - `GET`
    - get all post by that tag.
        `influers/tagged/{tag}`

### Likes
 - `GET`
    - get all liked posts.
         `/influers/likes`
 - `POST`
    - add a new like 
        `/influers/like`
 - `DELETE`
    -  delete a single liked post
        `/influers/like/:id`

### Posts
 - `GET /`
    - get to see all post.
        `influers/post/user/:id`
    - get to see the post of the user individually.
         `influers/post/:id`
    - get post for types of multimedia.
        `influers/posts/{type}`
 - `POST/`
    - add a new post.
        `influers/post`
 - `PATH/`
    - update a single post.
        `influers/post/:id`
 - `DELETE/`
    -delete a single post.
        `influers/post/:id`

### Comments
 - `POST` 
    - add or create a new comment.
       `influers/comment`
 - `PATCH`
    - update a comment.
        `influers/comment/:id`
 - `DELETE`
    - delete a single comment.
        `/comment/:id`

### Follows
 - `GET`
    - get the users that user follow.
        `influers/following`
    - get the user followers.
        `influers/followers`
 - `DELETE`
    - Delete follows & stop following.
        `influers/following` & `influers/followers`

### Search
 - `GET`   
    - get what your a looking.
        `influers/searching/{name}`
 - `PATH`
    - update your search.
        `influers/searching/{name}`

### Session
 - `POST`
    - Welcome the user to a new session on user login.
        `influers/session`
 - `DELETE` 
    - Deletes session on user logout.
        `influers/session`

## Bonus:
 > `Session`
 > `Search`
 > `Follow`