
var path = require("path");
module.exports = function (app) {
    app.get("/", function(req, res){
        displayHomePage(res);
    });

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
        res.sendFile(path.join(__dirname, "../public/home.html"));
    };

    function displaySurvey(res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    };

};