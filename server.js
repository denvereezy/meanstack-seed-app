const express    = require('express'),
      app        = express(),
      mongojs    = require('mongojs');
      db         = mongojs('contactlist', ['contactlist'])
      bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/', function (req, res) {

  db.contactlist.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.post('/contactlist', function (req, res) {
  console.log(req.body);
  db.contactlist.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});
app.listen(3000);
console.log("Server running on port 3000");
