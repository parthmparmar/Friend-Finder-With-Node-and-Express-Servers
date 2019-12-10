var DB = require("../data/friends.js")
var friends = DB.friendsDB;

module.exports = function (app) {
app.post("/api/friends", function (req, res) {

    var body = req.body;
    var score = turnArray(body);
    var friend = {
        name: body.name,
        photo: body.image_link,
        score: score
    };
    responseFriend = findFriend(score);
    friends.push(friend);
    res.json(friends[responseFriend]);
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
    bestMatchIndex = (bestMatch.indexOf(Math.min(...bestMatch)));
    return bestMatchIndex;
};
};
