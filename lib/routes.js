var actionsController = require('./controllers/actions_controller');

exports.setup = function(server) {
  server.get('/bids', actionsController.bids);
  server.post('/bids', actionsController.create);

  server.get('/asks', actionsController.asks);
  server.post('/asks', actionsController.create);
  
  return server;
};
