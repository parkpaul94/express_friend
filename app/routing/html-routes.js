var path = require('path');

module.exports = function(app) {

  app.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/survey.html"))
  });

  app.use((req, res) => {
    res.sendFile(path.join(__dirname + "/../public/home.html"))
  }); // Will send users to home page if they are not on a predefined home page.
}