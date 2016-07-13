'use strict'

var express = require('express')
var galileo = require('galileo-agent')

var app = express()
app.use(galileo(
  // 'f3bb1710212511e68b5e21491eda8147', // staging
  'efddaec0446411e6bfaab762242de1a7', // local
  // '5588d4c11932dc450959d7f6', // prod
  'default-environment',
  {
    logBody: true, // LOG_BODY agent spec
    failLog: '.', // FAIL_LOG agent spec
    failLogName: 'galileo-agent-errors.log', // FAIL_LOG agent spec
    limits: {
      bodySize: 1000000, // bytes
      retry: 5, // RETRY_COUNT agent spec
      retryTime: 1, // time in between retries
      flush: 5, // seconds, FLUSH_TIMEOUT agent spec
      connection: 30 // seconds, CONNECTION_TIMEOUT agent spec
    },
    queue: { // QUEUE_SIZE agent spec
      batch: 1, // number in a batch, if >1 switches path; `single` to `batch`
      entries: 500 // number of entries per ALF record
    },
    filters: {
      request: {
        headers: {
          name: [],
          value: []
        }
      },
      response: {
        headers: {
          name: [],
          value: []
        }
      }
    },
    collector: {
      // host: 'collector.galileo.mashape.com', // prod
      // host: 'collector.galileo.staging.mashape.com', // staging
      host: 'localhost', // local

      port: 58000, // local
      // port: 443, // staging/prod

      path: '/1.1.0/single',

      // ssl: true // staging/prod
      ssl: false // local
    }
  }
))
// app.use(compress())

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

// 'use strict'
//
// var http = require('http')
//
// var galileo = require('./lib')
// var agent = galileo('56cf3d2140aedfa34b1c9989', 'default-environment', {
//   logBody: true, // LOG_BODY agent spec
//   failLog: '/dev/null', // FAIL_LOG agent spec
//   limits: {
//     bodySize: 1000, // bytes
//     retry: 0, // R ETRY_COUNT agent spec
//     flush: 5, // seconds, FLUSH_TIMEOUT agent spec
//     connection: 30 // seconds, CONNECTION_TIMEOUT agent spec
//   },
//   queue: { // QUEUE_SIZE agent spec
//     batch: 1, // number in a batch, if >1 switches path; `single` to `batch`
//     entries: 2 // number of entries per ALF record
//   },
//   collector: {
//     host: 'localhost', // HOST agent spec
//     port: 58000, // PORT agent spec
//     path: '/1.1.0/single',
//     ssl: false
//   }
// })
//
// var server = http.createServer(function (req, res) {
//   agent(req, res)
//   res.writeHead(200, {'Content-Type': 'text/plain'})
//   res.end('Hello World!')
// })
//
// server.listen(8888)

// 'use strict'
//
// var restify = require('restify')
// var galileo = require('./lib')
//
// var server = restify.createServer()
//
// server.use(galileo('56cf3d2140aedfa34b1c9989', 'default-environment', {
//   logBody: true, // LOG_BODY agent spec
//   failLog: '/dev/null', // FAIL_LOG agent spec
//   limits: {
//     bodySize: 1000, // bytes
//     retry: 0, // R ETRY_COUNT agent spec
//     flush: 5, // seconds, FLUSH_TIMEOUT agent spec
//     connection: 30 // seconds, CONNECTION_TIMEOUT agent spec
//   },
//   queue: { // QUEUE_SIZE agent spec
//     batch: 1, // number in a batch, if >1 switches path; `single` to `batch`
//     entries: 2 // number of entries per ALF record
//   },
//   collector: {
//     host: 'localhost', // HOST agent spec
//     port: 58000, // PORT agent spec
//     path: '/1.1.0/single',
//     ssl: false
//   }
// }))
//
// server.get('/', function (req, res, next) {
//   res.send('Hello World!')
//   next()
// })
//
// server.post('/', function (req, res, next) {
//   res.send('Hello World!')
//   next()
// })
//
// server.listen(8888)
