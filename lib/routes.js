var actionsController = require('./controllers/actions_controller');
var tradesController = require('./controllers/trades_controller');

exports.setup = function(server) {
  server.get('/bids', actionsController.bids);
  server.post('/bids', actionsController.create);

  server.get('/asks', actionsController.asks);
  server.post('/asks', actionsController.create);

  server.get('/trades', tradesController.trades);
  
  return server;
};
