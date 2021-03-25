const mongoose = require("mongoose");
const { Schema } = mongoose;

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
    projects: [{
        type: Schema.Types.ObjectId,
        ref: "Project"
    }]
},{timestamps:true});

userSchema.virtual("fullName").get(function(){
    return `${this.name.first} ${this.name.last}`;
});


module.exports = mongoose.model("User",userSchema);