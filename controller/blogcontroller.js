const blog = require('../model/blog_model');
var uuid = require('uuid');
exports.getall= (req,res,next) => {
    blog.find({},'heading summary picture tags topic date uid author',{_id:0}).
    then(result => {
        next();
        console.log(result);
        res.send(result);
    })
    .catch(err => {
        res.sendStatus(400);
    })
}

exports.postone = (req,res,next) => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(mm < 10){
        mm = '0'+mm}
    if(dd < 10){
        dd = '0'+dd
    } 
    today = yyyy+'/'+mm+'/'+dd;
    var obj = req.body;
    obj["cmpdate"]=today;
    obj["uid"]=uuid.v4();
    blog.insertMany(obj).then
}

exports.getone = (req,res,next) => {
    blog.findOne({"uid": req.body.uid}).   
    then(result => {
        next();
        console.log(result);
        res.send(result);
    })
    .catch(err => {
        res.sendStatus(400);
    })
}