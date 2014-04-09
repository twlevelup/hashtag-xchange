var restify = require('restify');
var _ = require('underscore');
var sslRedirect = require('./ssl_redirector.js').forceSSLRedirect;

var inventory = [{"name": "yolo"}, {"name": "swag"}];
var bids = [];

var server;

exports.createServer = function() {
  server = restify.createServer();
  server.use(restify.bodyParser());

  if (process.env.NODE_ENV == "production") {
    server.use(sslRedirect);
  }

  server.get('/bids', function (req, res, next) {
    res.send(bids);
    next();
  });

  //{tag: "yolo", price: "10.00", units: 1}
  server.post('/bids', function (req, res, next) {
    bids.push(req.body);
    res.send(201);
    next();
  });

  var port = Number(process.env.PORT || 8080);
  server.listen(port, function() {
    console.log('%s listening at %s', server.name, server.url);
  });
};
