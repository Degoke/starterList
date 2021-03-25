const express = require("express");
const app = express();
const passport = require("passport");
const router = require("./routes/index");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/hackathon",
    {useCreateIndex:true,useFindAndModify:true,useNewUrlParser:true,useUnifiedTopology:true});
app.listen(process.env.PORT,console.log("Express server running"));