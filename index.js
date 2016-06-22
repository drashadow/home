var express = require('express')

var app = express()

admin.get('/', function (req, res) {
  res.sendFile('Admin Homepage')
})


app.listen(1207)
