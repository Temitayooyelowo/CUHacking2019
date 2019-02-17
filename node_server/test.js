const _ = require('lodash');
const translateFromDatabase_Data = {
    "userName": "Temitayo Oyelowo",
    "repositories": [
      {
        "name": "Calculator-Project-Unity",
        "commits": [
          {
            "languages": {
              "language": "c#",
              "numOfLines": 286
            }
          }
        ]
      },
      {
        "name": "Connect-Four-JavaFX-",
        "commits": [
          {
            "languages": {
              "language": "java",
              "numOfLines": 99
            }
          }
        ]
      },
      {
        "name": "Data-Structures",
        "commits": [
          {
            "languages": {
              "language": "c",
              "numOfLines": 47
            }
          },
          {
            "languages": {
              "language": "c",
              "numOfLines": 87
            }
          }
        ]
      },
      {
        "name": "GitWorkshopFall2018",
        "commits": []
      },
      {
        "name": "Java-Dice",
        "commits": [
          {
            "languages": {
              "language": "java",
              "numOfLines": 103
            }
          }
        ]
      },
      {
        "name": "Programming-Practice",
        "commits": [
          {
            "languages": {
              "language": "python",
              "numOfLines": 25
            }
          },
          {
            "languages": {
              "language": "python",
              "numOfLines": 0
            }
          },
          {
            "languages": {
              "language": "java",
              "numOfLines": 163
            }
          },
          {
            "languages": {
              "language": "python",
              "numOfLines": 0
            }
          },
          {
            "languages": {
              "language": "python",
              "numOfLines": 22
            }
          },
          {
            "languages": {
              "language": "python",
              "numOfLines": 1
            }
          },
          {
            "languages": {
              "language": "python",
              "numOfLines": 24
            }
          },
          {
            "languages": {
              "language": "python",
              "numOfLines": 18
            }
          },
          {
            "languages": {
              "language": "python",
              "numOfLines": 12
            }
          },
          {
            "languages": {
              "language": "python",
              "numOfLines": 8
            }
          },
          {
            "languages": {
              "language": "python",
              "numOfLines": 15
            }
          },
          {
            "languages": {
              "language": "python",
              "numOfLines": 9
            }
          },
          {
            "languages": {
              "language": "python",
              "numOfLines": 13
            }
          },
          {
            "languages": {
              "language": "python",
              "numOfLines": 3
            }
          },
          {
            "languages": {
              "language": "python",
              "numOfLines": 20
            }
          },
          {
            "languages": {
              "language": "python",
              "numOfLines": 0
            }
          },
          {
            "languages": {
              "language": "python",
              "numOfLines": 21
            }
          },
          {
            "languages": {
              "language": "python",
              "numOfLines": 17
            }
          },
          {
            "languages": {
              "language": "python",
              "numOfLines": 2
            }
          },
          {
            "languages": {
              "language": "python",
              "numOfLines": 18
            }
          },
          {
            "languages": {
              "language": "python",
              "numOfLines": 14
            }
          },
          {
            "languages": {
              "language": "python",
              "numOfLines": 1
            }
          },
          {
            "languages": {
              "language": "python",
              "numOfLines": 6
            }
          },
          {
            "languages": {
              "language": "python",
              "numOfLines": 28
            }
          },
          {
            "languages": {
              "language": "python",
              "numOfLines": 11
            }
          },
          {
            "languages": {
              "language": "python",
              "numOfLines": 29
            }
          }
        ]
      },
      {
        "name": "programming-problems",
        "commits": []
      },
      {
        "name": "react-tutorial-webpack",
        "commits": []
      },
      {
        "name": "test-backend",
        "commits": []
      },
      {
        "name": "TicTacToe",
        "commits": [
          {
            "languages": {
              "language": "c#",
              "numOfLines": 446
            }
          }
        ]
      },
      {
        "name": "TicTacToe-Game-Java",
        "commits": [
          {
            "languages": {
              "language": "java",
              "numOfLines": 61
            }
          }
        ]
      }
    ]
  }

// const translateToDatabase_Data = {
//     "_id" : "5c68f616876a9a26aabd7cc1",
//     "userName" : "Temitayo Oyelowo",
//     "repositories" : [ 
//         {
//             "_id" : "5c68f616876a9a26aabd7cc5",
//             "name" : "First repository",
//             "commits" : [ 
//                 {
//                     "languages": {
//                         "JavaScript": 123456789
//                     }
//                 }, 
//                 {
//                     "languages": {
//                         "Python" : 103
//                     }
//                 }
//             ]
//         }, 
//         {
//             "_id" : "5c68f616876a9a26aabd7cc2",
//             "name" : "Last Repository",
//             "commits" : [ 
//                 {
//                     "languages" : {
//                         "C": 10
//                     }
//                 }, 
//                 {
//                     "languages": {
//                         "Brain Fuck": 17
//                     }
//                 }
//             ]
//         }
//     ],
//     "__v" : 0
// }

const translateToDatabase_Data = {
    "userName": "Temitayo Oyelowo",
    "repositories": [
    {
      "name": "Calculator-Project-Unity",
      "commits": [
        {
          "languages": {
            "c#": 286
          }
        }
      ]
    },
    {
      "name": "Connect-Four-JavaFX-",
      "commits": [
        {
          "languages": {
            "java": 99
          }
        }
      ]
    },
    {
      "name": "Data-Structures",
      "commits": [
        {
          "languages": {
            "c": 47
          }
        },
        {
          "languages": {
            "c": 87
          }
        }
      ]
    },
    {
      "name": "GitWorkshopFall2018",
      "commits": [
        
      ]
    },
    {
      "name": "Java-Dice",
      "commits": [
        {
          "languages": {
            "java": 103
          }
        }
      ]
    },
    {
      "name": "Programming-Practice",
      "commits": [
        {
          "languages": {
            "python": 25
          }
        },
        {
          "languages": {
            "python": 0
          }
        },
        {
          "languages": {
            "java": 163
          }
        },
        {
          "languages": {
            "python": 0
          }
        },
        {
          "languages": {
            "python": 22
          }
        },
        {
          "languages": {
            "python": 1
          }
        },
        {
          "languages": {
            "python": 24
          }
        },
        {
          "languages": {
            "python": 18
          }
        },
        {
          "languages": {
            "python": 12
          }
        },
        {
          "languages": {
            "python": 8
          }
        },
        {
          "languages": {
            "python": 15
          }
        },
        {
          "languages": {
            "python": 9
          }
        },
        {
          "languages": {
            "python": 13
          }
        },
        {
          "languages": {
            "python": 3
          }
        },
        {
          "languages": {
            "python": 20
          }
        },
        {
          "languages": {
            "python": 0
          }
        },
        {
          "languages": {
            "python": 21
          }
        },
        {
          "languages": {
            "python": 17
          }
        },
        {
          "languages": {
            "python": 2
          }
        },
        {
          "languages": {
            "python": 18
          }
        },
        {
          "languages": {
            "python": 14
          }
        },
        {
          "languages": {
            "python": 1
          }
        },
        {
          "languages": {
            "python": 6
          }
        },
        {
          "languages": {
            "python": 28
          }
        },
        {
          "languages": {
            "python": 11
          }
        },
        {
          "languages": {
            "python": 29
          }
        }
      ]
    },
    {
      "name": "programming-problems",
      "commits": [
        
      ]
    },
    {
      "name": "react-tutorial-webpack",
      "commits": [
        
      ]
    },
    {
      "name": "test-backend",
      "commits": [
        
      ]
    },
    {
      "name": "TicTacToe",
      "commits": [
        {
          "languages": {
            "c#": 446
          }
        }
      ]
    },
    {
      "name": "TicTacToe-Game-Java",
      "commits": [
        {
          "languages": {
            "java": 61
          }
        }
      ]
    }
]
};

const translateToDatabase = (user) => {
    for(let i=0; i<user.repositories.length; i++) {
        let repo = user.repositories[i];
        // console.log("REPO");
        // console.log(repo);
        for(let j=0; j<repo.commits.length; j++) {
            let language = repo.commits[j].languages;
            const finalCommit = {};
            
            // console.log("COMMIT");
            // console.log(commit);

            const temp = {};
            for(let key in language) {
                temp.language = key;
                temp.numOfLines = language[key];            
            }
            repo.commits[j].languages = temp;
        }
        user.repositories[i] = repo;
    }
    return user;
    //console.log(JSON.stringify(user,undefined,2));
};

const translateFromDatabase = (user) => {
    for(let i=0; i<user.repositories.length; i++) {
        let repo = user.repositories[i];
        for(let j=0; j<repo.commits.length; j++) {
            let language = repo.commits[j].languages;
            // console.log(language);
            let temp = {};
            // if(!_.isEmpty(language)){
            //     temp[language["language"]] = language["numOfLines"];
            // }
            let value = "";
            // console.log("Language");
            // console.log(language);
            // for(let fakeKey of language) {
            for(let i=0; i<language.length; i++) {
                let fakeKey = language[i];
                // console.log("Fake key");
                // console.log(fakeKey);
                temp[fakeKey["language"]] = fakeKey["numOfLines"];
                // temp.language = key;
                // temp.numOfLines = language[key];
                language[i] = temp;     
                // language = language[i];       
            }
            // console.log(temp);
            repo.commits[j].languages = {};
            repo.commits[j].languages = repo.commits[j].languages[0];
        }
        user.repositories[i] = repo;
    }
       
        
    // console.log("in translate from function");
    // console.log(JSON.stringify(user,undefined,2));
    return user;
};

// console.log(JSON.stringify(translateToDatabase(translateToDatabase_Data),undefined,2));
// translateFromDatabase(translateFromDatabase_Data2);
// console.log(JSON.stringify(translateFromDatabase(translateFromDatabase_Data),undefined,2));

module.exports = {
    translateFromDatabase,
    translateToDatabase
}