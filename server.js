const express = require('express');
const app = express();
const index = require('./routes/index');
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/contactlist', index.show);

app.post('/contactlist', index.add);

app.delete('/contactlist/:id', index.delete);

app.get('/contactlist/:id', index.edit);

app.put('/contactlist/:id', index.update);

const port = process.env.PORT || 3002;
const server = app.listen(port, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('App running on http://%s:%s', host, port);
});
