DROP DATABASE IF EXISTS influers;

CREATE DATABASE influers;

\c influers;

-- Users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE NOT NULL,
  password_digest VARCHAR NOT NULL,
  blogname VARCHAR UNIQUE,
  email VARCHAR UNIQUE NOT NULL,
  profile_pic VARCHAR
--   likes_counter INT
);

--Blog
CREATE TABLE blog (
    id SERIAL PRIMARY KEY,
    blogger INT REFERENCES users(id) ON DELETE SET NULL,
    header_pic VARCHAR,
    brand_blog INT REFERENCES users(id) ON DELETE SET NULL,
    intro_text VARCHAR
);

--Posts
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    author INT REFERENCES users(id) ON DELETE SET NULL,
    title VARCHAR,
    url VARCHAR NOT NULL,
    body VARCHAR NOT NULL,
    blog INT REFERENCES blog(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    post_type VARCHAR
);

--Tag
CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    tagname VARCHAR NOT NULL,
    post INT REFERENCES posts(id) ON DELETE SET NULL
);

--Likes
CREATE TABLE likes (
    id SERIAL PRIMARY KEY,
    liked_posts INT REFERENCES posts(id) ON DELETE SET NULL
);

--Follows
CREATE TABLE follows (
    id SERIAL PRIMARY KEY,
    followed INT REFERENCES users(id) ON DELETE SET NULL,
    follower INT REFERENCES users(id) ON DELETE SET NULL
);

--Search 
CREATE TABLE search (
    id SERIAL PRIMARY KEY,
    user_searcher INT REFERENCES users(id) ON DELETE SET NULL,
    follows INT REFERENCES users(id) ON DELETE SET NULL,
    tags INT REFERENCES tags(id) ON DELETE SET NULL
);

INSERT INTO users (username, password_digest, blogname, email, profile_pic)
VALUES('isa', 10294,'inksmindsblog', '@SASDS.com', 'https://jojotastic.com/wp-content/uploads/2018/08/jojotastic-Minimalist-Living-Tips-Resources-2.jpg'), ('adiuska', 'sad1r45', 'timeboom', 'dfakjfk@com.org','https://static.boredpanda.com/blog/wp-content/uploads/2015/05/cute-minimalist-illustrations-jaco-haasbroek-41.jpg'), ('Mongie', 'sad1094','blog', '@fdsg.com','http://fallfordiy.com//wp-content/uploads/2016/12/DIY-Cork-Garland-with-Dulux-@fallfordiy-3.jpg');

INSERT INTO blog (blogger, header_pic, brand_blog, intro_text)
VALUES(1, 'https://66.media.tumblr.com/avatar_0571f945536a_128.pnj', NULL, 'hello there, welcome~');

INSERT INTO posts (author, title, url, body, blog, created_at, post_type)
VALUES(1, 'Crossfire', 'https://images.genius.com/be4a33678856cc57075ce947849d7d48.1000x1000x1.jpg', 'I would trade my luck to know, Why he is caught in the crossfire', 1, '2019-02-12 05:30:15', 'text'),
( 2, NULL , 'https://cdna.artstation.com/p/assets/images/images/003/748/256/large/sophie-li-flood4-original-cropped.jpg?1477065202', '✧ Mundane ' ,1, '2019-02-12 05:30:15', 'img'),
(2, Null, 'https://66.media.tumblr.com/d6349c1e6ebdd4fbb725d99a0815c10d/tumblr_pjuacjm6FE1rll77uo1_1280.gif', 'fade ˎˊ˗ ', 1, '2019-02-12 05:30:15', 'img'),
(1, 'Absolutely epic illustrations from artist Chun Lo', 'https://66.media.tumblr.com/b203ab642201d73198a6ed89880c7349/tumblr_po0qwsosBf1qz9v0to5_1280.jpg', 'Chun Lo, Illustrations', 1, '2019-02-12 05:30:15', 'img');
INSERT INTO tags (tagname, post)
VALUES('music', 1), ('crossfire', 1),('lyric', 1), ('drawing', 2), ('coffee', 2); 

INSERT INTO likes (liked_posts)
VALUES(1);

INSERT INTO follows (followed, follower)
VALUES(1,2), (3, 1);

INSERT INTO search (user_searcher, follows, tags)
VALUES(1, null, 1);