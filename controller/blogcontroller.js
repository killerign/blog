const blog = require('../model/blog_model');

exports.getall= (req,res,next) => {
    blog.find({},'heading summary picture tags topic date',{_id:0}).
    then(result => {
        next();
        console.log(result);
        res.send(result);
    })
    .catch(err => {
        res.sendStatus(400);
    })
}