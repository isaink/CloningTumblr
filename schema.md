# SCHEMA
### Users
name      | data type |       details
----------|-----------|--------------------------
`id `     |  integer  |   not null, primary key
`username`|  string   |   not null, indexed, unique
`blogname`|  string   |   null, indexed, unique 
`password`|  string	  |   null, unique
`follows(id)` | integer | null, foreign key
`followers(id)` | integer | null, foreign key
`likes_counter(id)` | integer | null, foreign key
> User has a profile, many posts, many follows, many followers, many likes (likes_counter)

### Posts
name      | data type |       details
----------|-----------|---------------------------
id        |  integer  |  not null, primary key
title     |  string   |  not null
body      |  string	  |  not null
image     |  string   |  null
datetime  |  string	  |  not null
tag(id)   | integer   | null, foreign key
likes(id) | integer   | null, foreign key
> Post body can have: text, image, link, audio, video.
> Post belog to Users.

### Tags
name      | data type |       details
----------|-----------|---------------------------
id        |   integer |    not null, primary key
tag_name  |   string  |    not null
posts(id) |   integer |    not null, foreign key
> Tag belog to posts.

### Likes
name              | data type |       details
------------------|-----------|-------------------
id                |   integer |    not null, primary key
liked_posts(id)   |   integer |    not null, foreign key
likes_counter(id)| integer    |    not null, foreign key
> likes belog to post and to users.
>  user have likes_counter(id).

### Follows
name              | data type |       details
------------------|-----------|-------------------
id                |  integer  |   not null, primary key
user(id)          |  integer  |   not null, foreign key
> Follows belog to users.

### Followers
name              | data type |       details
------------------|-----------|-------------------
id                |  integer  |   not null, primary key
user(id)          |  integer  |   not null, foreign key
> Followers belog to users.