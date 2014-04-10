require('./test_helper.js');
var request = require('supertest');
var restify = require('restify');

process.env.PORT = 8081;
var server = require('../lib/server').createServer();

describe("routing behaviour", function() {
  it("should redirect to SSL in production", function() {
  });

  describe("bids", function () {
    it("should match index", function(done) {
      request(server)
        .get('/bids')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
    
    it("should match creation", function(done) {
      request(server)
        .post('/bids')
        .send('{tag: "yolo", price: "10.00", units: 1}')
        .expect('Content-Type', /json/)
        .expect(201, done);
    });
  });
  
  describe("asks", function() {

  });

  describe("trades", function() {

  });
});
