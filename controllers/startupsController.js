const Startup = require("../models/startup");
const User = require("../models/user");

function getStartupParams(obj){
    return {
        name: obj.name,
        shortDescription: obj.shortDescription,
        owner: obj.owner,
        ratings: obj.ratings,
        industry: obj.industry,
        location: obj.location,
        logo: obj.logo,
        website: obj.website,
        images: obj.images,
        comments: obj.comments,
        dateFounded: obj.dateFounded,
        fundRaisingRound: obj.fundRaisingRound,
        existingInvestors: obj.existingInvestors,
        longDescription: obj.longDescription,
        totalFunding: obj.totalFunding,
        userMetrics: obj.userMetrics,
        ownerImage: obj.ownerImage};

};

module.exports = {
    new:(req,res,next)=>{
        let startupParams = getStartupParams(req.body);
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
        let startupParams = getStartupParams(req.body),
        startupId = req.params.id;
        Startup.findByIdAndUpdate(startupId, {
            $set: startupParams
        })
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
        Startup.findById(startupId).populate("owner").populate("comments.$*.author")
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
        Startup.find({}).populate("owner","name").populate({path:"comments",populate:"startup"})
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
