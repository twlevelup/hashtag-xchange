require('../test_helper.js');
var _ = require('underscore');

var post = function(path, body) {
  return request(server)
          .post(path)
          .send(body);
};

var get = function(path, body) {
  return request(server)
          .get(path);
};

var postAndAssert = function(path, body, callback) {
  post(path, body).end(callback);
};

var getAndAssert = function(path, assertionCallback) {
  get(path).end(assertionCallback);
};

describe("bids", function () {
  describe("when creating bids", function() {
    it("should produce an id", function(done) {
      request(server)
      .post('/bids')
      .send({action: 'bid', tag: "yolo", price: 10.00, units: 1})
      .end(function(err, res) {
        expect(res.body.id).to.be.a('number');
        done();
      });
    });

    it("should create a bid", function(done) {
      var hashTag = "test-" + Date.now();

      var assertBidExists = function(err, res) {
        var bid = _.findWhere(res.body, {tag: hashTag});

        expect(bid.id).to.be.a('number');
        expect(bid.action).to.equal('bid');
        expect(bid.price).to.equal(10.01);
        expect(bid.units).to.equal(1);
        done();
      };
 
      var assertBidCreated = function(err, res) {
        expect(res.body.id).to.be.a('number');
        getAndAssert('/bids', assertBidExists);
      };
 
      postAndAssert('/bids',
           {action: 'bid', tag: hashTag, price: 10.01, units: 1},
           assertBidCreated);
    });
  });

  describe("when listing bids", function() {
  });
});

