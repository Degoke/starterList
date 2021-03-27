const mongoose = require("mongoose");
const { Schema } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");

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
        ref: "Startup",
        autopopulate: true
    }],
    phone: String,
    profileImage: String,
    twitter: String,
    github: String,
    occupation: String,
    comments: [{
        startup: {
            type: Schema.Types.ObjectId,
            ref: "Startup",
            autopopulate: true
        },
        comment: String
    }]
},{timestamps:true});


userSchema.plugin(passportLocalMongoose,{usernameField:"email"});
userSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("User",userSchema);