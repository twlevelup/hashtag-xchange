require('./test_helper.js');
var restify = require('restify');

process.env.PORT = 8081;
require('../lib/server').createServer();
var client = restify.createJsonClient({
  url: 'http://localhost:8081'
});

describe("routing behaviour", function() {
  it("should redirect to SSL in production", function() {
  });

  it("should delegate bid requests", function(done) {
    client.post('/bids', {tag: "swag", price: "1.00"}, function (err, req, res, obj) {
      expect(res.statusCode).to.equal(201);
      done();
    });
  });

  it("should delegate ask requests", function() {

  }); 
 
  it("should delegate trade requests", function() {

  });
});
