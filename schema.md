# SCHEMA
###Users

name      | data type |       details
------------------------------------------------
id          integer     not null, primary key
username    string      not null, indexed, unique
blog_name   string      not null, indexed, unique 
password    string	    not null
 

User has a profile, many posts, many follows, many likes, 
magic_link is a random code to get access to Tumblr


###Posts

name      | data type |       details
------------------------------------------------
id          integer     not null, primary key
title       string      not null
body        string	    not null
image       string      not null, indexed, unique 
datetime    string	    not null
tag_name    string      
post_Quotes  string
post_Link    string 
post_Chat    string
post_Audio   string
post_Video   string

<!-- blog(id)  -->
<!-- ###postQuotes  
name      | data type |       details
------------------------------------------------
id             integer       not null, primary key
quote          string        not null
src            string        null

###postLink
name      | data type |       details
------------------------------------------------
id             integer          not null, primary key
url            string           not null
author         string           null
description    string           null

###postChat
name      | data type |       details
------------------------------------------------
id            integer            not null, primary key
title         string             null
chat          string             not null

###postAudio
name      | data type |       details
------------------------------------------------
id            integer       not null, primary key
url           string        not null

###postVideo
name      | data type |       details
------------------------------------------------
id            integer       not null, primary key
url           string        not null -->

<!-- Image, video & audio have: a url or ImageObject - Thumbnail -->

###Tags
name      | data type |       details
------------------------------------------------
id           integer     not null, primary key
tag_name     string             not null
posts(id)    integer     not null, foreign key

Tag belog to posts.

###Likes
name              | data type |       details
------------------------------------------------
id                   integer     not null, primary key
liked_posts(id)      integer     not null, foreign key
liked_count_user(id) integer     not null, foreign key

likes belog to post and to users.
###Follows
name              | data type |       details
------------------------------------------------
id                  integer     not null, primary key
user(id)            integer     not null, foreign key

Follows belog to users.