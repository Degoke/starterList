const User = require("../models/user");
const passport = require("passport");

function getUserParams(obj){
    const params = {};
    for(let key in obj){
        if(key == "password") continue;
        params[key] = obj[key];
        console.log(key);
        console.log(obj[key]);
    }
    return params;
};
    

module.exports = {
    new:(req,res,next)=>{
        let newUser = new User(getUserParams(req.body));
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
        let userId = req.params.id, userParams = getUserParams(req.body);
        User.findByIdAndUpdate(userId, {
            $set: userParams
        },{new:true})
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
        User.findById(userId).populate("startups", "name shortDescription").populate({path:"comments.startup",select:"name",model:"Startup"})
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
            User.findById(req.user._id).populate("startups", "name shortDescription").populate({path:"comments.startup",select:"name",model:"Startup"})
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