const express = require('express');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
const router = express();
const blog = require('../model/blog_model');
const blogcontroller = require('../controller/blogcontroller')
var cors = require('cors')
router.use(cors());
router.get('/getall',jsonParser,blogcontroller.getall);
router.post('/getone',jsonParser,blogcontroller.getone);
router.post('/postone',jsonParser,blogcontroller.postone);
router.route('/uid/:uid').get((req, res) => {
    blog.findOne({"uid": req.params.uid}).   
    then(result => {
        next();
        console.log(result);
        res.send(result);
    })
    .catch(err => {
        res.sendStatus(400);
    })
});
module.exports = router;