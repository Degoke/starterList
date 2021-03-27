require("dotenv").config();
const express = require("express");
const app = express();
const passport = require("passport");
const router = require("./routes/index");
const mongoose = require("mongoose");
const User = require("./models/user");
const cors = require("cors");

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI,
    {useCreateIndex:true,useFindAndModify:true,useNewUrlParser:true,useUnifiedTopology:true});
const db = mongoose.connection;
db.once("open",()=>{
        console.log("Succesfully connected to Database");
    });
app.set("port", process.env.PORT || 3000);
app.use(cors);
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(passport.initialize());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use((req,res,next)=>{
    res.locals.currentUser = req.user;
    next();
});

app.use("/",router);

app.listen(app.get("port"),console.log(`Express server running on port ${app.get("port")}`));