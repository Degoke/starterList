const express = require("express");
const app = express();
const passport = require("passport");
const router = require("./routes/index");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const User = require("./models/user");
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/hackathon",
    {useCreateIndex:true,useFindAndModify:true,useNewUrlParser:true,useUnifiedTopology:true});
const db = mongoose.connection;
db.once("open",()=>{
        console.log("Succesfully connected to Database");
    });
app.set("port", process.env.PORT || 3000);
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser("secret_passcode"));
app.use(expressSession({
    secret: "secret_passcode",
    cookie: {
        maxAge: 4000000
    },
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use((req,res,next)=>{
    res.locals.loggedIn = req.isAuthenticated();
    res.locals.currentUser = req.user;
    next();
});
app.use(methodOverride("_method",{ methods: ["POST","GET"]}));
app.use("/",router);
app.listen(app.get("port"),console.log(`Express server running on port ${app.get("port")}`));