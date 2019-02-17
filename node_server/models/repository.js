commitsSchema = require('./commits');

const repositorySchema = {
    name: String,
    language: [String],
    numOfLines: Number,
    commits: [commitsSchema]
};

module.exports = repositorySchema;