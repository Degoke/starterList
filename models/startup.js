const mongoose = require("mongoose");
const { Schema } = mongoose;
const User = require("./user");

startupSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    shortDescription: {
        type: String,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        autopopulate: true
    },
    ratings: {
        type: Number,
        min:[0,"Upvotes cannot be negative"],
        default: 0
    },
    industry: String,
    location: String,
    logo: String,
    website: String,
    images: String,
    comments: [{
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
            autopopulate: true
        },
        comment: String
    }],
    dateFounded: Date,
    fundRaisingRound: String,
    existingInvestors: String,
    longDescription: String,
    totalFunding: String,
    userMetrics: String,
    ownerImage: String

},{timestamps:true});

startupSchema.plugin(require("mongoose-autopopulate"));

startupSchema.post("findByIdAndUpdate",function(next){
    let startup = this;
    if(startup.comments.length > 0){
        startup.comments.forEach(comment => {
            User.findByIdAndUpdate(comment.author,{$addToSet:comment})
            .then(user=>{
                next();
            })
            .catch(error=>{
                console.log(`Error in updating user comments: ${error.message}`);
                next(error);
            });
        });
    } else {
        next();
    }
});

module.exports = mongoose.model("Startup",startupSchema);