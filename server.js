const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/about', function (req, res) {
  res.send('Hey this the about page !')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
