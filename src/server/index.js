const path = require('path');
const express = require('express');

const app = express();

app.use(express.static('dist'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../dist/index.html'), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(8080, () => console.log('Listening on port 8080!'));
