const express     = require('express'),
      bodyParser  = require("body-parser"),
      app         = express(),
      port        = 3001;

app.use(bodyParser.json());

app.post('/handlenews', (req, res) => {
  var news = req.body.data

  const spawn = require('child_process').spawn;
  const pyScript = spawn('python', ['get_model.py', news]);

  pyScript.stdout.on('data', function(data) {
    res.json({ 'data': data.toString() })
  });

  pyScript.on('error', function() {
    res.json({ 'data': 'Something went wrong when connected to Python script' })
  });
  
});

app.get('/api/download', (req, res) => {
  res.download('fakenews.pdf');
});

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`)
})