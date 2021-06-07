const express = require('express');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
const router = express();
const blogcontroller = require('../controller/blogcontroller')
var cors = require('cors')
router.use(cors());
router.get('/getall',jsonParser,blogcontroller.getall);
module.exports = router;