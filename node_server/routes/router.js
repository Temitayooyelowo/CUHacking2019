const express = require("express");
const router = express.Router();

const vizualizeData = require('../visualization_data');
const gitHubUser_GetData = require('../get_data');
const test = require('../test');
const User = require("../models/user");

router.route("/")
    .get((req,res) => {
        res.redirect('home');
    });

router.route("/home")
    .get((req,res) => {
        res.render('home', { welcomeText: "Welcome to our GitHub Analyzer" });
    });

// router.route("/gitHubUsers")
//     .get((req,res) => {
        // User.find().then((foundUsers) => {
        //     // res.send(foundUser)
        //     res.render('home', { welcomeText: "Welcome to our GitHub Analyzer" });
        // }).catch((err) => res.status(400).send(err) );
//     })
    // .post((req,res) => {
    //     const userName = req.body.userName;
    //     delete req.body.userName;
    //     const repositories = req.body.repositories;

    //     const newUser = {userName, repositories};

    //     User.create(newUser).then(() => {
    //         console.log("Successfully added a new user.");
    //         res.render('home', {welcomeText: 'Successfully added a new user.'});
    //     })
    //         .catch((err) => {
    //             res.status(400).send(err);
    //         });
    // });

router.route("/gitHubUser")
    .get(async(req,res) => {
        const gitHubUsername = req.query.gitHubUsername;
        let nestedFoundUser;
        let nestedFoundUsers;
        const oldUsers = await User.find();
        const foundUsers = [];
        for(let i=0; i<oldUsers.length; i++) {
            let temp = oldUsers[i];
            foundUsers[i] = test.translateFromDatabase(temp).repositories;
        }
        nestedFoundUsers = foundUsers;
        console.log(nestedFoundUsers);

        User.findOne({userName: gitHubUsername}).then(async (foundUser) => {
            if(!!foundUser) {
                console.log('here');
                nestedFoundUser = test.translateFromDatabase(foundUser);
                const repos = nestedFoundUser.repositories;

                const allPieData = vizualizeData.get_ml(nestedFoundUsers,repos);
                console.log("Before");
                console.log(allPieData);

                const pieData = vizualizeData.cleaned_data(repos);
                // console.log(pieData);
                console.log("Successfully found user");
                res.render('user', { 
                    foundUser: nestedFoundUser,
                    allPieData: JSON.stringify(allPieData),
                    pieData: JSON.stringify(pieData)
                });
            } else {
                // Makes query to restful api
                // save JSON to database
                // return JSON
                try {
                    const data = await gitHubUser_GetData.get_all(gitHubUsername);
                    nestedFoundUser = {
                        userName: gitHubUsername,
                        repositories: data
                    };
                    const userData = test.translateToDatabase(nestedFoundUser);
                    // console.log(JSON.stringify(userData,undefined,2));
                    const newUser = new User(userData);
                    newUser.save().then(() => {
                        console.log("Did NOT find any user");
                        let pieData = test.translateFromDatabase(userData);

                        const allPieData = vizualizeData.get_ml(nestedFoundUsers,pieData.repositories);

                        pieData = vizualizeData.cleaned_data(pieData.repositories);
                        
                        // res.render('user', { 
                        //     foundUser: userData,
                        //     allPieData: JSON.stringify(allPieData),
                        //     pieData: JSON.stringify(pieData)
                        // });
                        res.redirect(`/gitHubUser?gitHubUsername=${gitHubUsername}`);
                    });
                }catch(e) {
                    console.log(e);
                }
               
            }
        })
        .catch((err) => res.status(400).send(err));
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