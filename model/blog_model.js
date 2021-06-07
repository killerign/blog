//post_model.js
const { ObjectID } = require('bson');
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const postSchema = new schema({
    id: {
        require : true,
        type: String
    },
    heading:{
        type:String
    },
    summary:{
        type:String
    },
    picture:{
        type:String
    },
    body:{
        require:true,
        type:String
    },
    tags:{
        type:String
    },
    topic:{
        type:String
    },
    author:{
        type:String
    },
    date:{
        type:String
    },
    cpmdate:{
        type:String
    },
    likes:{
        type:String
    },
    dislikes:{
        type:String
    }
},
{ versionKey: false }); 
module.exports = mongoose.model('Bloginfos',postSchema,'bloginfos');