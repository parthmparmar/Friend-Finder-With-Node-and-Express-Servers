var express = require("express");
var app = express();
var path = require("path")
var PORT = process.env.PORT || 5001;

var DB = require("./app/data/friends.js");
var friends = DB.friendsDB;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/:action', function (req, res) {
    var action = req.params.action

    switch (action) {
        case "home":
            displayHomePage(res);
            break;
        case "survey":
            displaySurvey(res);
            break;
        default:
            displayHomePage(res);
            break;
    }
});

function displayHomePage(res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
}

function displaySurvey(res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
}

app.post("/api/friends", function (req, res) {

    var body = req.body;
    var score = turnArray(body);
    var friend = {
        name: body.name,
        photo: body.image_link,
        score: score
    };
    findFriend(score);
    friends.push(friend);
});

function turnArray(obj) {
    var array = [];
    for (key in obj) {
        if (key != "name" && key != "image_link") {
            array.push(parseInt(obj[key].substring(0, 1)));
        };
    };
    return array;
};

function findFriend(currentScore) {
    var bestMatch = [];
    
    friends.forEach(element => {
        var totalDiff = 0;
        for (var i = 0; i < currentScore.length; i++){
            totalDiff = totalDiff + Math.abs(currentScore[i] - element.score[i]);
        };
        bestMatch.push(totalDiff);
    });
    console.log(bestMatch);
    console.log(bestMatch.indexOf(Math.min(...bestMatch)));
};

app.listen(PORT, function () {
    console.log("App listening on Port: " + PORT)
});
