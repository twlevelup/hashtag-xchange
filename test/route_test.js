require('./test_helper.js');

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
        .send({"tag": "yolo", "price": 10.00, "units": 1})
        .expect('Content-Type', /json/)
        .expect(201, done);
    });
  });

  describe("asks", function() {
    it("should match index", function(done) {
      request(server)
        .get('/asks')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it("should match creation", function(done) {
      request(server)
        .post('/asks')
        .send({"tag": "yolo", "price": 10.00, "units": 1})
        .expect('Content-Type', /json/)
        .expect(201, done);
    });
  });

  describe("trades", function() {
    it("should match index", function(done) {
      request(server)
        .get('/trades')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });
});
