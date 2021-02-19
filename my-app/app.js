const express = require('express')
const app = express()
const port = 3001
var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post('/handlenews', (req, res) => {
  var news = req.body.data
  console.log(news)

  res.json([
    { id: 1, username: "Belis" },
    { id: 2, username: "Belmin" }
  ])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})