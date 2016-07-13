var express = require('express')
var galileo = require('galileo-agent')

var app = express()
var agent = galileo('2e4157d03c8511e69cd6c912c9fdabe8', 'mashape-test-environment')

app.use(agent)

app.get('/', function (req, res) {
  res.sendStatus(200)
})

app.get('/:var1', function (req, res) {
  res.sendStatus(200)
})
app.get('/:var1/:var2', function (req, res) {
  var status = 200
  if (req.params.var1 === 'status') {
    status = parseInt(req.params.var2)
  }
  res.sendStatus(status)
})
app.get('/:var1/:var2/:var3', function (req, res) {
  var status = 200
  if (req.params.var1 === 'status') {
    status = parseInt(req.params.var2)
  }
  res.sendStatus(status)
})
app.get('/:var1/:var2/:var3/:var4', function (req, res) {
  var status = 200
  if (req.params.var1 === 'status') {
    status = parseInt(req.params.var2)
  }
  res.sendStatus(status)
})

app.post('/', function (req, res) {
  res.sendStatus(200)
})

app.post('/:var1', function (req, res) {
  res.sendStatus(200)
})
app.post('/:var1/:var2', function (req, res) {
  var status = 200
  if (req.params.var1 === 'status') {
    status = parseInt(req.params.var2)
  }
  res.sendStatus(status)
})
app.post('/:var1/:var2/:var3', function (req, res) {
  console.log(req.params)
  var status = 200
  if (req.params.var1 === 'status') {
    status = parseInt(req.params.var2)
  }
  res.sendStatus(status)
})
app.post('/:var1/:var2/:var3/:var4', function (req, res) {
  var status = 200
  if (req.params.var1 === 'status') {
    status = parseInt(req.params.var2)
  }
  res.sendStatus(status)
})
app.delete('/', function (req, res) {
  res.sendStatus(200)
})

app.patch('/', function (req, res) {
  res.sendStatus(200)
})

app.listen(8888, function () {
  console.log('demo running on port 8888')
})
