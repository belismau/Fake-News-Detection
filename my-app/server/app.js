const express     = require('express'),
      bodyParser  = require("body-parser"),
      app         = express(),
      port        = 3001;

app.use(bodyParser.json());

app.post('/handlenews', (req, res) => {
  var news = req.body.data

  var info = 'Express server responded with OK! ' +
             'Your input: ' + news

  res.json({ data: info })
});


app.get('/api/download', (req, res) => {
  res.download('fakenews.pdf');
});

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`)
})

module.exports = app;