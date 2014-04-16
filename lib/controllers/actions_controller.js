var _ = require('underscore');
var actions = [];

exports.index = function (req, res, next) {
  res.send(actions);
  next();
};

exports.bids = function (req, res, next) {
  var bids = _.where(actions, {action: 'bid'});
  res.send(bids);
  next();
};

exports.asks = function (req, res, next) {
  var asks = _.where(actions, {action: 'ask'});
  res.send(asks);
  next();
};

exports.trades = function (req, res, next) {
  res.send([]);
  next();
};

//{action: 'bid', tag: "yolo", price: "10.00", units: 1}
exports.create = function (req, res, next) {
  var action = req.body;
  
  var id = actions.length;
  action.id = id;

  actions.push(action);
  res.send(201, { id: id });

  next();
};
