const mongoose = require("mongoose");
const { Schema } = mongoose;
const {filePlugin, make_upload_to_model} = require("mongoose-file");
const passportLocalMongoose = require("passport-local-mongoose");
const path = require("path");

var uploads_base = path.join(__dirname, "uploads");
var uploads = path.join(uploads_base, "u");

const userSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true
    },
    startups: [{
        type: Schema.Types.ObjectId,
        ref: "Startup"
    }],
    phone: String,
    profileImage: String,
    twitter: String,
    github: String,
    occupation: String,
    comments: [{
        startup: {
            type: Schema.Types.ObjectId,
            ref: "Startup"
        },
        comment: String
    }]
},{timestamps:true});


userSchema.plugin(passportLocalMongoose,{usernameField:"email"});
userSchema.plugin(filePlugin, {
    name: "profileImage",
    upload_to: make_upload_to_model(uploads, 'photos'),
    relative_to: uploads_base
});

module.exports = mongoose.model("User",userSchema);