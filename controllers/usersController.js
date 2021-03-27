const Startup = require("../models/startup");
const User = require("../models/user");
const passport = require("passport");

function getUserParams(obj){
    return {
        name: obj.name,
        email: obj.email,
        phone: obj.phone,
        profileImage: obj.profileImage,
        twitter: obj.twitter,
        github: obj.github,
        occupation: obj.occupation,
        startups: obj.startups,
        comments: obj.comments};

};

module.exports = {
    new:(req,res,next)=>{
        if(req.skip) next();
        let newUser = new User(getUserParams(req.body));
        User.register(newUser,req.body.password, (error, user)=>{
            if(user){
                res.locals.user = user;
                next();
            } else {
                console.log(`Failed to create user account because: ${error.message}`)
                next(new Error(`Failed to create user account because: ${error.message}`));
            }
        });

    },
    update:(req,res,next)=>{
        let userId = req.params.id, userParams = getUserParams(req.body);
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
                res.locals = null;
                next();
        })
        .catch(error => {
            console.log(`Error deleting user by ID: ${error.message}`);
            next(error);
        });
    },
    show:(req,res,next)=>{
        let userId = req.params.id;
        User.findById(userId)
        .then(user =>{
            res.locals.user = user;
            next();
        })
        .catch(error=>{
            console.log(`Error retrieving user: ${error.message}`);
            next(error);
        })
    },
    authenticate: passport.authenticate("local"),
    respondJSON: (error,req,res,next)=>{
        let resObj;
        if(error){
            resObj = {
                status: 500,
                message: error.message,
                data: null
            };
            res.status(500).json(resObj);
        } else {
            resObj = {
                status: 200,
                message: "success",
                data : res.locals
            };
            res.status(200).json(resObj);
        }
    },
    logout: (req,res,next) => {
        req.logout();
        res.locals = null;
        next();
    }
};