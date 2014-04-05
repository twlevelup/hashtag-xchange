require('./test_helper.js');

var inventory, exports;
exports = require('../lib/inventory.js');

describe("Inventory", function() {
  describe("single hashtag", function() {
    beforeEach(function(done) {
      inventory = new exports.Inventory(["yolo"]);
      return done();
    });
    it("should have the correct number of items", function () {
      inventory.items.hashtags.should.have.length(1);
    });
    it("should return the hashtag name", function () {
      inventory.items.hashtags[0].name.should.equal("yolo");
    });
    it("should return link to the hashtag resource", function () {
      inventory.items.hashtags[0].url.should.equal("/hashtags/yolo");
    });
  });

  describe("multiple hashtags", function() {
    beforeEach(function(done) {
      inventory = new exports.Inventory(["yolo", "swag", "bieber"]);
      return done();
    });
    it("should have the correct number of items", function () {
      inventory.items.hashtags.should.have.length(3);
    });
    it("should return the hashtag name", function () {
      inventory.items.hashtags[2].name.should.equal("bieber");
    });
    it("should return link to the hashtag resource", function () {
      inventory.items.hashtags[1].url.should.equal("/hashtags/swag");
    });
  });
});
