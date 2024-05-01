const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name : {
            type: String,
            required: true,
        },
        surname : {
            type: String,
            required: true,
        },
        email : {
            type: String,
            required: true,
        },
        isseuedBook : { 
            type: mongoose.Schema.Types.ObjectId,
            ref : "Book",
            required: false,
        },
        returDate : {
            type: String,
            required: false,
        },
        subscriptionType : {
            type: String,
            required: true,
        },
        subscriptionDate : {
            type: String,
            required: true,
        },
    },
    {
        timestamp : true,
    }
);
//collection will have a name "book"
module.exports = mongoose.model("User", userSchema);