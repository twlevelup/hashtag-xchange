exports.hashtagXchange = function() {
  var restify = require('restify');

  var sslRedirect = require('./ssl_redirector.js').forceSSLRedirect;

  var Inventory = require('./inventory.js').Inventory;
  var inventory = new Inventory(["yolo", "swag"]);

  var server = restify.createServer();

  if (process.env.NODE_ENV == "production") {
    server.use(sslRedirect);
  }

  server.get(/^\/hashtags[\/]?$/, function (req, res, next) {
    res.send(inventory.items);
    next();
  });

  var port = Number(process.env.PORT || 8080);
  server.listen(port, function() {
    console.log('%s listening at %s', server.name, server.url);
  });
};
