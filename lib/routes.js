var bidsController = require('./controllers/bids_controller');

exports.setup = function(server) {
  server.get('/bids', bidsController.index);
  server.post('/bids', bidsController.create);
  
  return server;
};
