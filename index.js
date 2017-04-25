const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const config = require('./config')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/recaptcha', (req, res) => {
  const r = req.body['g-recaptcha-response'];
  const s = config.secret;

  request2 = request({
    url: 'https://www.google.com/recaptcha/api/siteverify',
    qs: {
      secret: s,
      response: r
    }
  }, (err, response, body) => {
    res.end(body);
  });
});

app.use('/static', express.static('public'))
const PORT = 8888;
app.listen(PORT, () => {
  console.log('listening at port: ', PORT);
});
