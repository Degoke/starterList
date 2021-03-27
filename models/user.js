const mongoose = require("mongoose");
const { Schema } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    name: {
        first: {
            type: String,
            trim: true
        },
        last: {
            type: String,
            trim:true
        }
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
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

userSchema.virtual("fullName").get(function(){
    return `${this.name.first} ${this.name.last}`;
});


userSchema.plugin(passportLocalMongoose,{usernameField:"email"});

module.exports = mongoose.model("User",userSchema);