const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
    language: String,
    numOfLines: Number
}, { _id: false});

const commitsSchema = new mongoose.Schema({
    languages: [languageSchema],
},{ _id: false});

module.exports = commitsSchema;