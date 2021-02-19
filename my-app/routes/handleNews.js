const express = require('express')
const router = express.Router()

router.post('/handlenews', (req, res) => {
  res.json([
    { id: 1, username: "Belis1" },
    { id: 2, username: "Belis2" }
  ])
})

module.exports = router;