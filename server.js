const express = require('express');
const path = require('path');

const app = express();
app.use('/static', express.static(path.join(__dirname, 'build/static')));
app.get('*', function(req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, 'build/'),
  });
});
app.listen(3000);
