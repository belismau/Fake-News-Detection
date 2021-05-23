const express     = require('express'),
      bodyParser  = require("body-parser"),
      app         = express(),
      port        = 3001,
      spawn       = require('child_process').spawn,
      path        = require('path');

app.use(bodyParser.json());

app.post('/handlenews', (req, res) => {
  var news = req.body.data

  console.log(news)

  const pyScript = spawn('python', ['./get_model.py', news]);

  pyScript.stdout.on('data', function(data) {
    console.log(data)
    res.json({ 'data': data.toString() })
  });

  pyScript.on('error', function() {
    res.json({ 'data': 'Something went wrong when connecting to "get_model.py"' })
  });
   
});

app.get('/download', (req, res) => {
  var file = path.join(__dirname, 'fakenews.pdf');
  
  res.download(file, function (err) {
    if (err) {
        console.log("Error");
        console.log(err);
    } else {
        console.log("Success");
    }
  });

});

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`)
})
