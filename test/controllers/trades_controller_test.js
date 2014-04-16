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

describe("trades", function () {
  describe("when there are none", function() {
    it("should return an empty list", function(done) {
      request(server)
        .get('/trades')
        .end(function(err, res) {
          expect(res.body).to.be.empty;
          done();
        });
    });
  });
});