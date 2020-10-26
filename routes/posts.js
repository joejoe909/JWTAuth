const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/',verify, (req,res)=>{
    res.json({
        posts:({ posts: {title: 'my first post', description: 'random data you shouldnt axis unless logged in...'}})
    });
});

module.exports = router;