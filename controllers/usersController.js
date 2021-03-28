const User = require("../models/user");
const passport = require("passport");
const cloudinary = require('cloudinary').v2;

function getUserParams(obj){
    if(obj.file){
        cloudinary.uploader.upload(obj.file.profileImage.buffer)
        .then(image=>{
            let url = image.url;
            return {
                name: obj.body.name,
                email: obj.body.email,
                phone: obj.body.phone,
                profileImage: url,
                twitter: obj.body.twitter,
                github: obj.body.github,
                occupation: obj.body.occupation,
                startups: obj.body.startups,
                comments: obj.body.comments};
        })
        .catch(error => {
            console.log(`Error uploading profile image: ${error.message}`);
            next(error);
        })
    } else {
        return {
            name: obj.body.name,
            email: obj.body.email,
            phone: obj.body.phone,
            twitter: obj.body.twitter,
            github: obj.body.github,
            occupation: obj.body.occupation,
            startups: obj.body.startups,
            comments: obj.body.comments};
    }
};
    

module.exports = {
    new:(req,res,next)=>{
        let newUser = new User(getUserParams(req));
        User.register(newUser,req.body.password, (error, user)=>{
            if(user){
                User.findById(user._id)
                .then(user=>{
                    res.locals.user = user
                    next();
                })
                .catch(error=>{
                    console.log(`Failed to create and retrieve user account because: ${error.message}`);
                    next(error);
                })
                
            } else {
                console.log(`Failed to create user account because: ${error.message}`)
                next(new Error(`Failed to create user account because: ${error.message}`));
            }
        });

    },
    update:(req,res,next)=>{
        let userId = req.params.id, userParams = getUserParams(req);
        User.findByIdAndUpdate(userId, {
            $set: userParams
        })
        .then(user => {
                res.locals.user = user;
                next();
        })
        .catch(error => {
            console.log(`Error updating user by ID: ${error.message}`);
            next(new Error(`Failed to update user account because: ${error.message}`));
        });
    },
    delete:(req,res,next)=>{
        let userId = req.params.id;
        User.findByIdAndRemove(userId)
        .then(user => {
                res.locals.user = "deleted successfully";
                next();
        })
        .catch(error => {
            console.log(`Error deleting user by ID: ${error.message}`);
            next(error);
        });
    },
    show:(req,res,next)=>{
        let userId = req.params.id;
        User.findById(userId).populate("startups", "name shortDescription").populate("comments")
        .then(user =>{
            res.locals.user = user;
            next();
        })
        .catch(error=>{
            console.log(`Error retrieving user: ${error.message}`);
            next(error);
        })
    },
    authenticate: passport.authenticate("local",{session:false}),
    respondJSON: (req,res,next)=>{
        resObj = {
            status: 200,
            message: "success",
            data : res.locals
        };
        if(req.user){
            User.findById(req.user._id).populate("startups", "name shortDescription").populate("comments.$*.startup")
            .then(user =>{
                res.locals.user = user;
                res.status(200).json(resObj);
            })
            .catch(error=>{
                console.log(`Error retrieving user: ${error.message}`);
                next(error);
            })
        } else res.status(200).json(resObj);
        
        
    },
    logout: (req,res,next) => {
        req.logout();
        next();
    }
};