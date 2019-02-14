# SCHEMA
### Users
name      | data type |       details
----------|-----------|--------------------------
`id `     |  integer  |   not null, primary key
`username`|  string   |   not null, unique
`blogname`|  string   |   null, unique 
`profile_pic`|  string|   null 
`password`|  string	  |   null, unique
<!-- `follows(id)` | integer | null, foreign key -->
`likes_counter(id)` | integer | null, foreign key
> User has a profile, many posts, many follows, many followers, many likes (likes_counter)

### Blog 
name      | data type |       details
----------|-----------|--------------------------
`id `     |  integer  |   not null, primary key
`user(id)`|  integer    |   not null, foreign key
<!-- `tag(id)` |  integer    |   not null, foreign key -->

> A new session is added to this project and the Explore page is deleted instead.
### Posts
name      | data type |       details
----------|-----------|---------------------------
`id`        |  integer  |  not null, primary key
`title`     |  string   |  not null
`body `     |  string	|  not null
`image`     |  string   |  null
`created_at`|  string	|  not null
<!-- `tag(id) `  | integer   | null, foreign key -->
<!-- `likes(id) `| integer   | null, foreign key -->
`blog(id)`  | integer   | null, foreign key
> Post body can have: text, image, link, audio, video.
> Post belog to Users.

### Tags
name      | data type |       details
----------|-----------|---------------------------
`id `       |   integer |    not null, primary key
`tag_name ` |   string  |    not null
`posts(id)` |   integer |    not null, foreign key
> Tag belog to posts.

### Likes
name              | data type |       details
------------------|-----------|-------------------
`id `             |   integer |    not null, primary key
`liked_posts(id) `|   integer |    not null, foreign key
`u_posts(id) `  |   integer |    not null, foreign key
> likes belog to post and to users.
>  user have likes_counter(id) is prefered to use COUNT on Selecting instead of new data in table.

### Follows
name              | data type |       details
------------------|-----------|-------------------
`id  `            |  integer  |   not null, primary key
`followed_id`     |  integer  |   not null, foreign key
`follower_id`     |  integer  |   not null, foreign key

> Follows belog to users.  Followed & Follower are references to USER(ID).

### Search
name              | data type |       details
------------------|-----------|-------------------
`id  `             |  integer  |   not null, primary key
`tag(id)`          |  integer  |   null, foreign key
`user(id)`         |  integer  |   null, foreign key
`follows(id)`      |  integer  |   null, foreign key

> Search have tag, user, follows