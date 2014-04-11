require('../test_helper.js');
var _ = require('underscore');

var post = function(path, body, callback) {
  request(server)
  .post(path)
  .send(body)
  .end(callback);
};

var get = function(path, assertionCallback) {
  request(server)
  .get(path)
  .end(assertionCallback);
};

describe("bid controller", function () {
  describe("when creating bids", function() {
    it("should produce an id", function(done) {
      request(server)
      .post('/bids')
      .send('{tag: "yolo", price: "10.00", units: 1}')
      .end(function(err, res) {
        expect(res.body.id).to.be.a('number');
        done();
      });
    });

    it("should create a bid", function(done) {
      var hashTag = "test-" + Date.now();

      var assertBidExists = function(err, res) {
        var bid = _.findWhere(res.body, {tag: hashTag});

        expect(bid.price).to.equal(10.01);
        expect(bid.units).to.equal(1);
        done();
      };
 
      var assertBidCreated = function(err, res) {
        expect(res.body.id).to.be.a('number');
        get('/bids', assertBidExists);
      };
 
      post('/bids',
           {tag: hashTag, price: 10.01, units: 1},
           assertBidCreated);
    });
  });
});

