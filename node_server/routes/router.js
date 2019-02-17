const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.route("/gitHubUsers/")
    .get((req,res) => {
        User.find().then((foundUser) => {
            res.send(foundUser)
        }).catch((err) => res.status(400).send(err) );
    })
    .post((req,res) => {
        const userName = req.body.userName;
        delete req.body.userName;
        const repositories = req.body.repositories;

        const newUser = {userName, repositories};

        User.create(newUser).then(() => res.send("Successfully added a new user."))
            .catch((err) => res.status(400).send(err));
    });


router.route("/gitHubUsers/:gitHubUsername")
    .get((req,res) => {
        User.findOne({userName: req.params.gitHubUsername}).then((foundUser) => {
            if(!!foundUser) {
                res.send(foundUser);
            }

            // Makes query to restful api
            // save JSON to database
            // return JSON
            res.send("No user matching that name was found.");
        }).catch((err) => res.status(400).send(err));
    })
    .put((req,res) => {
        const userName = req.body.userName;
        delete req.body.userName;
        const repositories = req.body.repositories;

        User.replaceOne(
            {userName: userName},
            {userName: userName, repositories: repositories}
        ).then(() => {
            console.log('UserName: ' + userName);
            console.log(repositories);
            res.status(200).send(repositories);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send(err);
        });
    })
    .patch((req,res) => {
        User.updateOne(
            {userName: req.params.gitHubUsername},
            {$set: req.body}
        ).then(() => res.send("Successfully updated user."))
        .catch((err) => res.status(400).send(err));
    })
    .delete((req,res) => {
        User.deleteOne({userName: req.params.gitHubUsername}).then(() => {
            res.send("User has been sucessfully deleted");
        })
        .catch((err) => res.status(400).send(err));
    });

module.exports = router;