DROP DATABASE IF EXISTS influers;
CREATE DATABASE influers;

\c influers

-- Users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE NOT NULL,
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
    title VARCHAR NOT NULL,
    body VARCHAR NOT NULL,
    img VARCHAR,
    blog INT REFERENCES blog(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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

INSERT INTO users (username, blogname, email, profile_pic)
VALUES('isa', 'inksmindsblog', '@SASDS.com', 'https://jojotastic.com/wp-content/uploads/2018/08/jojotastic-Minimalist-Living-Tips-Resources-2.jpg'), ('adiuska', 'timeboom', 'dfakjfk@com.org','https://static.boredpanda.com/blog/wp-content/uploads/2015/05/cute-minimalist-illustrations-jaco-haasbroek-41.jpg'), ('Mongie', 'blog', '@fdsg.com','http://fallfordiy.com//wp-content/uploads/2016/12/DIY-Cork-Garland-with-Dulux-@fallfordiy-3.jpg');

INSERT INTO blog (blogger, header_pic, brand_blog, intro_text)
VALUES(1, 'https://66.media.tumblr.com/avatar_0571f945536a_128.pnj', NULL, 'hello there, welcome~');

INSERT INTO posts (author, title, body, img, blog, created_at)
VALUES(1, 'Crossfire', 'I would trade my luck to know, Why he is caught in the crossfire', 'https://i.ytimg.com/vi/isL-5S0ihaY/maxresdefault.jpg', 1, '2019-02-12 05:30:15'),( 2, 'Crossfire', 'I would trade my luck to know, Why he is caught in the crossfire', 'https://i.ytimg.com/vi/isL-5S0ihaY/maxresdefault.jpg', 1, '2019-02-12 05:30:15');

INSERT INTO tags (tagname, post)
VALUES('music', 1), ('crossfire', 1),('lyric', 1);

INSERT INTO likes (liked_posts)
VALUES(1);

INSERT INTO follows (followed, follower)
VALUES(1,2), (3, 1);

INSERT INTO search (user_searcher, follows, tags)
VALUES(1, null, 1);