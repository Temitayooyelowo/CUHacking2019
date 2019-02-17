const mongoose = require('mongoose');

// Import repository schema
const repositorySchema = require('./repository');

mongoose.connect("mongodb://localhost:27017/githubUsers", {useNewUrlParser: true}, (err) => {
    if(err) {
        return console.log ("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
});

const gitHubUserSchema = mongoose.Schema({
    userName: String,
    repositories: [repositorySchema]
});

const User = mongoose.model("GitHubUser", gitHubUserSchema);

module.exports = User;