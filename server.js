const express    = require('express'),
      app        = express(),
      mongojs    = require('mongojs');
      db         = mongojs('contactlist', ['contactlist'])
      bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/contactlist', function (req, res) {
  console.log('I received a GET request');

  db.contactlist.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.listen(3000);
console.log("Server running on port 3000");
