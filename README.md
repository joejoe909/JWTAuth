# JWTAuth
JWT auth example.

This is the Jason Web Token Authorization tutorial avaialble from DevEd https://www.youtube.com/watch?v=2jqok-WgelI&t=1074s

This is a pretty good tutorial for learning Node, JWT and Express Server.

To test it use an application such as postman -> https://www.postman.com/product/api-client/


note you will need to setup a .env file and have the following two items 
setup correctly.

DB_CONNECT = theServerURL.
TOKEN_SECRET = aRandomSetOfCharacters

If you go through the tutorial DevEd explains it well

My file, specifically, validation.js will ease some possible pitfalls other users have encountered in this tutorial. Note that this pitfall has been encoutnered by other users and many in the comments help with this also. If you look at this file it should get you past this quickly.

I hope this helps you in someway but much props to DevEd as I haven learned quite a bit from his tutorials. 