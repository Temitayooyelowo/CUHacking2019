const mongoose = require('mongoose');

commitsSchema = require('./commits');

const repositorySchema = new mongoose.Schema({
    name: String,
    commits: [commitsSchema]
}, { _id: false});

module.exports = repositorySchema;