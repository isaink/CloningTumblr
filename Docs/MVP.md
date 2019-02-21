[Trello](https://trello.com/b/BdiIr9lF )

# ∞INFLUERS
`[∞influers]` Origin of `infinite influencers` INF-LUENCERS, and from the similitude of sounds: flux, flow.

The App that makes closer relations between fans and trends. 

Is an Full-Stack App built with Express, React and Redux. It's a social media for blog users + fans that allows following blogs, interact with other bloggers thru shares, give likes contents, and be aware of the new trends by tags.

Gives the idea of accessibility infinite-trend for users-fans thru visual contents on scroll endless.
> This is a clone of Tumblr.

### USER PERSONA: 

`Name:` Isa
`Demographic Info: ` Adult latin NewYorker with interest on ilustrations, art, and code but doesn't know where to find creative people with good conents. 
`Pain Points:`  Makes connection with creative contents and users. Like follow, likes and share info . 
`Potential Solutions: ` Have available to the user buttons to likes each content also their are able to follow.

### Brand Idea: 
Using symbol of Inifinite.
Visual Interface...
Colors Palette: -- dark blue & white 

## Minimum viable product Follows:
  - **Project Structure:** 
    - **Users:** [Main]
    - **Tags:**  [for Social networking website]
    - **Likes**  [for Social networking website]
    - **Follows:** [users - blogs]
    - **Posts:** [Short-form blog] 
        - likes, 
        - comment, 
        - tag,
        - share posts to [User or via: email, link, social media: Twitter, Pinterest, Facebook, Reddit] `Is BONUS`

 - **DashBoard Interface**
     - Live Feed [ infinite show posts ]
     - Tags
     - Multimedia SRC
        - Text `[video, image, gif, lines, continuo session] [tag]`
        - Images `[only img]`
        - Video `[ pc or URL]`
        - Chat `[ give a fake chat] & [ share to Twitter] [tag]` `Is BONUS`
        - Quotes `[" "] [video, image, gif, lines, continuo session] [tag]` `Is BONUS`
        - Links `[to blog pages] [url]`
        - Audio / Music `[ URL ]`

 - **Pages:**
    - [ ] Home [ **Overriding**]
        - Session ( Header )
            - Logo
            - Search
            - Options NAVBAR
        - Session ( Post )
        - Session ( Wall- Dashboard )
    - [ ] Blog
    - [ ] Follows 
    - [ ] Followers
    - [ ] Likes 

## BONUS
>    - Explore page with blog of the moment..
>    - Recommended blog & Radar.
>    - Inbox page.
>    - See activity-notifications Page [ likes, reblog, follows].
>    - Made new Post Float-Page [Have Multimedia SRC].
>    - Info & Register Page .
>        - background image or gif of a user blogger.
>        - session log in - sing up.
>   - Share posts.

## Implementation Timeline: 
### Phases 1 : Backend setup (2 days)
    * 1 day: 
            - `Creat own API database.`
            - `Routes`
            - `Queries`
    * Second week:
            - **Home** page:
                - Dashboard which is random & timeline posts.
                - Function Get random Post to the background 
                - Create Post types.
                - mouseover profile Info
                - likes post
                - comment post
                - GET, DELETE, POST, PATCH (CRUD-post)
            - Navbar: 
                    - User info { likes, following, posts, follows}
                    - Make a new Post types
                    - Back Home 
            - Submit forms: Log In & Sign Up.
            - Search.
    * Third week:
           - **Follow** and **Following** Pages:
                - Button to follow for both pages.
                - Button to Unfollow to Following page.
                - Pop up w/ mouseover Info of Post-Blog visualization on Following Page.
                - Search option on Follow page.
                - GET, DELETE, POST (CRUD-follow)
    * Fouth week: 
            - **Likes** Page
                - Button to Follow user.
                - Show liked post
                - Complete: the **Router**, **CSS** style,
                - GET, DELETE, POST (CRUD-likes) 


Get Tumblr API: https://github.com/tumblr/tumblr.js  & https://www.tumblr.com/docs/en/api/v2 & https://tumblr.github.io/tumblr.js/TumblrClient.html#.createPost