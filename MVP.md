# The App for Trends + Fans
`[∞influers]` 
Origin of `infinite influencers` INF-LUENCERS, and from the similitude of sounds: flux, flow.
The App that makes closer relations between fans and trends. 

Is an App built with Express and React. It's a social media for blog users + fans that allows following blogs, interact with other bloggers thru shares, give likes contents, and be aware of the new trends by tags.

Gives the idea of accessibility infinite-trend for users-fans thru visual contents on scroll endless.

### Brand Idea: 
Using symbol of Inifinite, signal of capturing a photo (moving fingers)
Visual Interface
Colors Palette: --

## Minimum viable product Follows:
  - **Project Structure:** 
    - **Users:** [Main]
    - **Tags:**  [for Social networking website, incluing Likes]
    - **Likes** 
    - **Follows:** [users - blogs]
    - **Posts:** [Short-form blog] [Send posts to others, create, delete, updated] 
        - likes, share, comment, send [User or OutSide thru: Email, <>, link, Social media: Twitter, Pinterest, Facebook, Reddit]

 
 - **DashBoard Interface**
     - Live Feed [ infinite show posts ]
     - Tags
     - Multimedia SRC
        - Text [video, image, gif, lines, continuo session] [tag]
        - Images [only img]
        - Video [ pc or web]
        - Chat [ give a fake chat] & [ share to Twitter] [tag]
        - Quotes [" "] [video, image, gif, lines, continuo session] [tag]
        - Links [to blog pages] [url]
        - Submit Questions
        - Audio / Music [ url ]

 - **Pages:**
    - Info & Register Page 
        -background image or gif of a user blogger
        - session log in - sing up
    - Home Page [ **Overriding**]
        -Session ( Header )
            1. Logo
            2. Search
            3. Options NAVBAR
        - Session ( Recommended blog & Radar )
            1. Follows
        - Session ( Post )
        - Session ( Q&A )
        - Session ( Wall- Dashboard )
    - Blog Page 

    **EXTRA**
    - Explore Page
        - Blog of the moment
    - Inbox Page
    - Insta Message Page
    - See activity Page [ likes, reblog, follows]
    - Account Page
    - Made new Post Float-Page [Have Multimedia SRC]

## Docs: 
   * View Wireframes
   * React Components
   * API Endpoints
   * DB Schema
   * Sample State

## Implementation Timeline: 
- Phases 1 : Backend setup and Front End 
    * 1 week: 
            - Creat own API database & also figure out how to use Tumblr API
            - Routes
            - Creating **Info** & **Register** Page
            - Function Get random Post to the background 
            - Submit forms: Log In & Sign Up.
            - Search.
    * Second week:
            - **Home** page:
                - Dashboard who random & timeline posts.
                - Navbar: 
                    - User info { likes, following, posts, follows}
                    - Explore
                    - Make a new Post types
                    - Back Home 
                - Create Post types.
                - mouseover profile Info
                - likes post
                - reblog post
                - comment post
                - GET, DELETE, POST, PATCH (CRUD-post)
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