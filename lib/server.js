var restify = require('restify');
var routes = require('./routes');
var _ = require('underscore');
var sslRedirect = require('./ssl_redirector.js').forceSSLRedirect;

var server;

exports.createServer = function() {
  var port = Number(process.env.PORT || 8080);
  
  server = restify.createServer();
  
  server.use(restify.bodyParser());
  if (process.env.NODE_ENV == "production") {
    server.use(sslRedirect);
  }

  server = routes.setup(server);

  server.listen(port, function() {
    console.log('%s listening at %s', server.name, server.url);
  });

  return server;
};
