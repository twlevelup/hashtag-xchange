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

// TODO: reset server state between tests
describe("bids", function () {

  describe("when listing bids", function() {
    describe("when no bids exists", function() {
      it("should return an empty list", function(done) {
        getAndAssert('/bids', function(err, res) {
          expect(res.body).to.be.empty;
          done();
        });
      });
    });
    describe("when bids exists", function () {
      it("should not return an empty list", function(done) {
        request(server)
        .post('/bids')
        .send({action: 'bid', tag: "yolo", price: 10.00, units: 1}).end(function (err,res) {
          getAndAssert('/bids', function(err, res) {
            expect(res.body).to.not.be.empty;
            done();
          });
        });
      });
    });
  });

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
});

describe("asks", function () {
  describe("when creating asks", function() {
    it("should produce an id", function(done) {
      request(server)
      .post('/asks')
      .send({action: 'ask', tag: "yolo", price: 12.23, units: 1})
      .end(function(err, res) {
        expect(res.body.id).to.be.a('number');
        done();
      });
    });

    it("should create an ask", function(done) {
      var hashTag = "test-" + Date.now();

      var assertAskExists = function(err, res) {
        var bid = _.findWhere(res.body, {tag: hashTag});

        expect(bid.id).to.be.a('number');
        expect(bid.action).to.equal('ask');
        expect(bid.price).to.equal(33.92);
        expect(bid.units).to.equal(1);
        done();
      };

      var assertAskCreated = function(err, res) {
        expect(res.body.id).to.be.a('number');
        getAndAssert('/asks', assertAskExists);
      };

      postAndAssert('/asks',
                    {action: 'ask', tag: hashTag, price: 33.92, units: 1},
                    assertAskCreated);
    });
  });
});
