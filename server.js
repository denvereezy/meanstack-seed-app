const express = require('express');
app = express();
app.listen(3000);
app.get('/', function(req,res){
res.send('hello');
});
console.log('app running on port 3000');
