var _ = require('underscore');
var trades = [];

exports.trades = function(req, res, next) {
  res.send( trades );
  next();
};