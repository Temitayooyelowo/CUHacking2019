const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.route("/")
    .get((req,res) => {
        res.redirect('home');
    });

router.route("/home")
    .get((req,res) => {
        res.render('home', { welcomeText: "Welcome to our GitHub Analyzer" });
    });

router.route("/gitHubUsers")
    .get((req,res) => {
        User.find().then((foundUser) => {
            // res.send(foundUser)
            res.render('home', { welcomeText: "Welcome to our GitHub Analyzer" });
        }).catch((err) => res.status(400).send(err) );
    })
    .post((req,res) => {
        const userName = req.body.userName;
        delete req.body.userName;
        const repositories = req.body.repositories;

        const newUser = {userName, repositories};

        User.create(newUser).then(() => {
            console.log("Successfully added a new user.");
            res.render('home', {welcomeText: 'Successfully added a new user.'});
        })
            .catch((err) => {
                res.status(400).send(err);
            });
    });

router.route("/gitHubUser")
    .get((req,res) => {
        const gitHubUsername = req.query.gitHubUsername;
        User.findOne({userName: gitHubUsername}).then((foundUser) => {
            if(!!foundUser) {
                console.log("Successfully found user");
                res.render('user', { foundUser: JSON.stringify(foundUser) });
            } else {
                // Makes query to restful api
                // save JSON to database
                // return JSON
                
                console.log("Did NOT find any user");
                res.render('home', { welcomeText: 'Did NOT find any user' });
            }

            
        }).catch((err) => res.status(400).send(err));
    });
    // .put((req,res) => {
    //     const userName = req.body.userName;
    //     delete req.body.userName;
    //     const repositories = req.body.repositories;

    //     User.replaceOne(
    //         {userName: userName},
    //         {userName: userName, repositories: repositories}
    //     ).then(() => {
    //         console.log('UserName: ' + userName);
    //         console.log(repositories);
    //         res.status(200).send(repositories);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //         res.status(400).send(err);
    //     });
    // })
    // .patch((req,res) => {
    //     User.updateOne(
    //         {userName: req.params.gitHubUsername},
    //         {$set: req.body}
    //     ).then(() => res.send("Successfully updated user."))
    //     .catch((err) => res.status(400).send(err));
    // })
    // .delete((req,res) => {
    //     User.deleteOne({userName: req.params.gitHubUsername}).then(() => {
    //         res.send("User has been sucessfully deleted");
    //     })
    //     .catch((err) => res.status(400).send(err));
    // });

module.exports = router;