const Startup = require("../models/startup");
const User = require("../models/user");

function getStartupParams(obj){
    const params = {};
    for(let key in obj.body){
        params[key] = obj.body[key];
    }
    const files = obj.files;
    for(let obj in files){
        if(obj == "logo" || obj == "ownerImage"){
            params[obj] = files[obj][0].path;
        }
        if(obj == "images"){
            params[obj] = files[obj].map(file=>file.path);
        }
    }
    return params;
};

module.exports = {
    new:(req,res,next)=>{
        let startupParams = getStartupParams(req);
        Startup.create(startupParams)
        .then(startup => {
            if(startup.owner && startup.owner != null){
                User.findByIdAndUpdate(startup.owner,{
                    $push:{startups:startup}
                }).then(user => {
                    res.locals.startup = startup;
                    next();
                }).catch(error => {
                    console.log(`Error adding startup to user: ${error.message}`);
                    next(error);
                })
            } else {
                res.locals.startup = startup;
                next();
            }   
        })
        .catch(error => {
            console.log(`Error creating startup: ${error.message}`);
            next(error);
        });

    },
    update:(req,res,next)=>{
        let startupParams = getStartupParams(req),
        startupId = req.params.id;
        Startup.findByIdAndUpdate(startupId, {
            $set: startupParams
        },{new:true})
        .then(startup => {
                res.locals.startup = startup;
                next();
        })
        .catch(error => {
            console.log(`Error updating startup by ID: ${error.message}`);
            next(error);
        });
    },
    delete:(req,res,next)=>{
        let startupId = req.params.id;
        Startup.findByIdAndRemove(startupId)
        .then(startup => {
                res.locals.startup = "deleted successfully";
                next();
        })
        .catch(error => {
            console.log(`Error deleting course by ID: ${error.message}`);
            next(error);
        });
    },
    retrieve:(req,res,next)=>{
        let startupId = req.params.id;
        Startup.findById(startupId).populate("owner","name").populate({path:"comments.author",select:"name",model:"User"})
        .then(startup =>{
            res.locals.startup = startup;
            next();
        })
        .catch(error=>{
            console.log(`Error retrieving course: ${error.message}`);
            next(error);
        })
    },
    respondJSON: (req,res,next)=>{
        resObj = {
                status: 200,
                message: "success",
                data : res.locals
            };
        res.status(200).json(resObj);
    },
    index: (req,res,next)=>{
        Startup.find({}).populate("owner","name").populate({path:"comments.author",select:"name",model:"User"})
        .then(startups => {
            if(startups){
                res.locals.startups = startups;
                next();
            }else{
                next(new Error("No startups found"));
            }
        })
        .catch(error => {
            console.log(`Error fetching startups: ${error.message}`);
            next(error);
        });
    },
    comment: (req,res,next)=>{
        let startupId = req.params.id,
         authorId = req.body.owner,
         commentData = req.body.comment;
        let comment = {
            author: authorId,
            comment: commentData
        };
        Startup.findByIdAndUpdate(startupId, {
            $push:{
                comments: comment
            }
            
        })
        .then(startup => {
            let authorComment = {
                startup: startupId,
                comment: commentData
            };
            User.findByIdAndUpdate(authorId,{
                $push:{comments:authorComment}
            }).then(user => {
                res.locals.success = true;
                next();
            }).catch(error => {
                console.log(`Error adding comment to user: ${error.message}`);
                next(error);
            })
        })
        .catch(error => {
            console.log(`Error adding comment: ${error.message}`);
            next(error);
        });
    },
    upvote: (req,res,next)=>{
        let startupId = req.params.id;
        Startup.findByIdAndUpdate(startupId, {
            $inc:{
                ratings:1
            }
        })
        .then(startup => {
                res.locals.success = true;
                next();
        })
        .catch(error => {
            console.log(`Error adding upvote: ${error.message}`);
            next(error);
        });
    }
};
