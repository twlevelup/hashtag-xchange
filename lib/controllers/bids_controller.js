var bids = [];

exports.index = function (req, res, next) {
  res.send(bids);
  next();
};

//{tag: "yolo", price: "10.00", units: 1}
exports.create = function (req, res, next) {
  bids.push(req.body);
  res.send(201, {id: 1});
  next();
};
